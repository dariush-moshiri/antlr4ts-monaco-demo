import { ANTLRErrorListener, CharStreams, CommonTokenStream, Recognizer } from 'antlr4ts';
import { ExprLexer } from '../../../../lib/ExprLexer';
import { Token } from 'antlr4ts/Token';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { CompileUnitContext, ExprParser } from '../../../../lib/ExprParser';

class MyErrorListener implements ANTLRErrorListener<any> {
  syntaxError<T>(recognizer: Recognizer<T, any>,
                 offendingSymbol: T | undefined, line: number,
                 charPositionInLine: number, msg: string,
                 e: RecognitionException | undefined): void {
    console.error(msg);
  }
}

export function createLexer(input: string): ExprLexer {
  const chars = CharStreams.fromString(input);
  const lexer = new ExprLexer(chars);

  return lexer;
}

export function getTokens(input: string): Token[] {
  return createLexer(input).getAllTokens();
}

export function createParser(input: string): ExprParser {
  return new ExprParser(new CommonTokenStream(createLexer(input)));
}

export function createParserFromLexer(lexer: ExprLexer): ExprParser {
  return new ExprParser(new CommonTokenStream(lexer));
}

export function parseTree(input: string): CompileUnitContext {
  return createParser(input).compileUnit();
}

export function parseTreeStr(input: string): string {
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new MyErrorListener());
  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new MyErrorListener());
  const tree = parser.compileUnit();
  return tree.toStringTree(parser.ruleNames);
}
