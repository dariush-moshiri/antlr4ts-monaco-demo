// Generated from lib/Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MultiplicativeRuleContext } from "./ExprParser";
import { AddingRuleContext } from "./ExprParser";
import { NumberRuleContext } from "./ExprParser";
import { ParensRuleContext } from "./ExprParser";
import { CompileUnitContext } from "./ExprParser";
import { ExprContext } from "./ExprParser";
import { LastContext } from "./ExprParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `multiplicativeRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeRule?: (ctx: MultiplicativeRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `addingRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingRule?: (ctx: AddingRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberRule?: (ctx: NumberRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `parensRule`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensRule?: (ctx: ParensRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.last`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;
}

