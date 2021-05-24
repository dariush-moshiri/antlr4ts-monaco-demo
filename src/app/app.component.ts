import { Component, OnInit } from '@angular/core';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ExprLexer } from '../../lib/ExprLexer';
import {
  AddingRuleContext,
  CompileUnitContext,
  ExprParser,
  MultiplicativeRuleContext,
  NumberRuleContext,
  ParensRuleContext
} from '../../lib/ExprParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { ExprVisitor } from '../../lib/ExprVisitor';
import { v4 as uuidv4 } from 'uuid';

class ExpressionNode {
  start: number;
  end: number;
}

class SourceNode extends ExpressionNode {
  expressions: ExpressionNode[];
}

class BinaryExpression extends ExpressionNode {
  left: ExpressionNode;
  right: ExpressionNode;
  type: string;
}

class NumberNode extends ExpressionNode {
  content: number;
  metadata: any;
}

class ExpressionVisitor extends AbstractParseTreeVisitor<ExpressionNode> implements ExprVisitor<ExpressionNode> {
  protected defaultResult(): ExpressionNode {
    return undefined;
  }

  visitAddingRule(ctx: AddingRuleContext): ExpressionNode {
    return {
      type: ctx._op.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      start: ctx._left._start.startIndex,
      end: ctx._right._start.stopIndex
    } as BinaryExpression;
  }

  visitCompileUnit(ctx: CompileUnitContext): ExpressionNode {
    return {
      expressions: ctx.expr().map(ctxExpr => this.visit(ctxExpr)).concat(this.visit(ctx.last().expr()))
    } as SourceNode;
  }

  visitMultiplicativeRule(ctx: MultiplicativeRuleContext): ExpressionNode {
    return {
      type: ctx._op.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      start: ctx._left._start.startIndex,
      end: ctx._right._start.stopIndex
    } as BinaryExpression;
  }

  visitNumberRule(ctx: NumberRuleContext): ExpressionNode {
    return {
      content: ctx.INT().text as unknown as number,
      metadata: { uuid: uuidv4() },
      start: ctx.start.startIndex,
      end: ctx.start.stopIndex
    } as NumberNode;
  }

  visitParensRule(ctx: ParensRuleContext): ExpressionNode {
    return this.visit(ctx.expr());
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formulas-poc';

  ngOnInit(): void {
    // const is = CharStreams.fromString('2+2\n3-3\n5+5+5\n');
    // const lexer = new ExprLexer(is);
    // const tokenStream = new CommonTokenStream(lexer);
    // const parser = new ExprParser(tokenStream);
    // const ast = new ExpressionVisitor().visitCompileUnit(parser.compileUnit());
    //
    // console.log(JSON.stringify(ast, null, 2));
  }

}
