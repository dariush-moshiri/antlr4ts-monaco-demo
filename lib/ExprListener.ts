// Generated from lib/Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MultiplicativeRuleContext } from "./ExprParser";
import { AddingRuleContext } from "./ExprParser";
import { NumberRuleContext } from "./ExprParser";
import { ParensRuleContext } from "./ExprParser";
import { CompileUnitContext } from "./ExprParser";
import { ExprContext } from "./ExprParser";
import { LastContext } from "./ExprParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExprParser`.
 */
export interface ExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `multiplicativeRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeRule?: (ctx: MultiplicativeRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeRule?: (ctx: MultiplicativeRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `addingRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddingRule?: (ctx: AddingRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `addingRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddingRule?: (ctx: AddingRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `numberRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNumberRule?: (ctx: NumberRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `numberRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNumberRule?: (ctx: NumberRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `parensRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParensRule?: (ctx: ParensRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `parensRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParensRule?: (ctx: ParensRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ExprParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;

	/**
	 * Enter a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ExprParser.last`.
	 * @param ctx the parse tree
	 */
	enterLast?: (ctx: LastContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.last`.
	 * @param ctx the parse tree
	 */
	exitLast?: (ctx: LastContext) => void;
}

