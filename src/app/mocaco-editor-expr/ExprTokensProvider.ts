import { ANTLRErrorListener } from 'antlr4ts';
import { createLexer } from './parser/ParserFacade';
import IToken = monaco.languages.IToken;
import ILineTokens = monaco.languages.ILineTokens;

const EOF = -1;

export class ExprState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new ExprState();
  }

  equals(other: monaco.languages.IState): boolean {
    return true;
  }
}

export class ExprTokenProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new ExprState();
  }

  tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
    return tokensForLine(line);
  }
}

class ExprToken implements IToken {
  scopes: string;
  startIndex: number;

  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName.toLowerCase() + '.expr';
    console.log(this.scopes);
    this.startIndex = startIndex;
  }
}

class ExprLineTokens implements ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];

  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new ExprState();
    this.tokens = tokens;
  }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
  const errorStartingPoints: number[] = [];

  class ErrorCollectorListener implements ANTLRErrorListener<any> {
    // tslint:disable-next-line:typedef
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      errorStartingPoints.push(column);
    }
  }

  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  const errorListener = new ErrorCollectorListener();
  lexer.addErrorListener(errorListener);
  let done = false;
  const myTokens: monaco.languages.IToken[] = [];
  do {
    const token = lexer.nextToken();
    if (token == null) {
      done = true;
    } else {
      // We exclude EOF
      if (token.type === EOF) {
        done = true;
      } else {
        const tokenTypeName = lexer.ruleNames[token.type - 1];
        const myToken = new ExprToken(tokenTypeName, token.charPositionInLine);
        myTokens.push(myToken);
      }
    }
  } while (!done);
  // Add all errors
  for (const e of errorStartingPoints) {
    myTokens.push(new ExprToken('error', e));
  }
  myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1);
  console.log(myTokens);
  return new ExprLineTokens(myTokens);
}
