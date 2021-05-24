// Generated from lib/Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExprListener } from "./ExprListener";
import { ExprVisitor } from "./ExprVisitor";


export class ExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly NEWLINE = 7;
	public static readonly INT = 8;
	public static readonly RETURN = 9;
	public static readonly RULE_compileUnit = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_last = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compileUnit", "expr", "last",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'", "'('", "')'", undefined, undefined, 
		"'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NEWLINE", "INT", "RETURN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprParser._LITERAL_NAMES, ExprParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExprParser._ATN, this);
	}
	// @RuleVersion(0)
	public compileUnit(): CompileUnitContext {
		let _localctx: CompileUnitContext = new CompileUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExprParser.RULE_compileUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExprParser.T__4 || _la === ExprParser.INT) {
				{
				{
				this.state = 6;
				this.expr(0);
				this.state = 7;
				this.match(ExprParser.NEWLINE);
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 14;
			this.last();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, ExprParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExprParser.INT:
				{
				_localctx = new NumberRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 17;
				this.match(ExprParser.INT);
				}
				break;
			case ExprParser.T__4:
				{
				_localctx = new ParensRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 18;
				this.match(ExprParser.T__4);
				this.state = 19;
				this.expr(0);
				this.state = 20;
				this.match(ExprParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 32;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 30;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeRuleContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MultiplicativeRuleContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 24;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 25;
						(_localctx as MultiplicativeRuleContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ExprParser.T__0 || _la === ExprParser.T__1)) {
							(_localctx as MultiplicativeRuleContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 26;
						(_localctx as MultiplicativeRuleContext)._right = this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new AddingRuleContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddingRuleContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 27;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 28;
						(_localctx as AddingRuleContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ExprParser.T__2 || _la === ExprParser.T__3)) {
							(_localctx as AddingRuleContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 29;
						(_localctx as AddingRuleContext)._right = this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public last(): LastContext {
		let _localctx: LastContext = new LastContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExprParser.RULE_last);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(ExprParser.RETURN);
			this.state = 36;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v)\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\x19\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03!\n\x03\f\x03\x0E\x03$\v\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x02\x02\x03\x04\x05\x02\x02\x04\x02\x06\x02\x02\x04\x03\x02\x03" +
		"\x04\x03\x02\x05\x06\x02)\x02\r\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02" +
		"\x06%\x03\x02\x02\x02\b\t\x05\x04\x03\x02\t\n\x07\t\x02\x02\n\f\x03\x02" +
		"\x02\x02\v\b\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02" +
		"\r\x0E\x03\x02\x02\x02\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10" +
		"\x11\x05\x06\x04\x02\x11\x03\x03\x02\x02\x02\x12\x13\b\x03\x01\x02\x13" +
		"\x19\x07\n\x02\x02\x14\x15\x07\x07\x02\x02\x15\x16\x05\x04\x03\x02\x16" +
		"\x17\x07\b\x02\x02\x17\x19\x03\x02\x02\x02\x18\x12\x03\x02\x02\x02\x18" +
		"\x14\x03\x02\x02\x02\x19\"\x03\x02\x02\x02\x1A\x1B\f\x06\x02\x02\x1B\x1C" +
		"\t\x02\x02\x02\x1C!\x05\x04\x03\x07\x1D\x1E\f\x05\x02\x02\x1E\x1F\t\x03" +
		"\x02\x02\x1F!\x05\x04\x03\x06 \x1A\x03\x02\x02\x02 \x1D\x03\x02\x02\x02" +
		"!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#\x05\x03\x02" +
		"\x02\x02$\"\x03\x02\x02\x02%&\x07\v\x02\x02&\'\x05\x04\x03\x02\'\x07\x03" +
		"\x02\x02\x02\x06\r\x18 \"";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprParser.__ATN) {
			ExprParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprParser._serializedATN));
		}

		return ExprParser.__ATN;
	}

}

export class CompileUnitContext extends ParserRuleContext {
	public last(): LastContext {
		return this.getRuleContext(0, LastContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ExprParser.NEWLINE);
		} else {
			return this.getToken(ExprParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_compileUnit; }
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterCompileUnit) {
			listener.enterCompileUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitCompileUnit) {
			listener.exitCompileUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitCompileUnit) {
			return visitor.visitCompileUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicativeRuleContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterMultiplicativeRule) {
			listener.enterMultiplicativeRule(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitMultiplicativeRule) {
			listener.exitMultiplicativeRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitMultiplicativeRule) {
			return visitor.visitMultiplicativeRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddingRuleContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterAddingRule) {
			listener.enterAddingRule(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitAddingRule) {
			listener.exitAddingRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAddingRule) {
			return visitor.visitAddingRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberRuleContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(ExprParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterNumberRule) {
			listener.enterNumberRule(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitNumberRule) {
			listener.exitNumberRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitNumberRule) {
			return visitor.visitNumberRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensRuleContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterParensRule) {
			listener.enterParensRule(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitParensRule) {
			listener.exitParensRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitParensRule) {
			return visitor.visitParensRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(ExprParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_last; }
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitLast) {
			listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


