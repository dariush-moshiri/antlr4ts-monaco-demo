grammar Expr;		
compileUnit:	(expr NEWLINE)* last;
expr:	left=expr op=('*'|'/') right=expr # multiplicativeRule
    |	left=expr op=('+'|'-') right=expr # addingRule
    |	INT # numberRule
    |	'(' expr ')' # parensRule
    ;
last: RETURN expr;
NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;
RETURN: 'return';
