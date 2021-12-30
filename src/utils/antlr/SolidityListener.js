// Generated from Solidity.g4 by ANTLR 4.9
// jshint ignore: start
const antlr4 = require("antlr4")

// This class defines a complete listener for a parse tree produced by SolidityParser.
class SolidityListener extends antlr4.tree.ParseTreeListener {

	metadata = {}

	// Enter a parse tree produced by SolidityParser#sourceUnit.
	enterSourceUnit(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#sourceUnit.
	exitSourceUnit(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#pragmaDirective.
	enterPragmaDirective(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#pragmaDirective.
	exitPragmaDirective(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#pragmaName.
	enterPragmaName(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#pragmaName.
	exitPragmaName(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#pragmaValue.
	enterPragmaValue(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#pragmaValue.
	exitPragmaValue(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#version.
	enterVersion(ctx) {
		// console.log(JSON.stringify(ctx))
		// console.log(ctx)
	}

	// Exit a parse tree produced by SolidityParser#version.
	exitVersion(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#versionOperator.
	enterVersionOperator(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#versionOperator.
	exitVersionOperator(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#versionConstraint.
	enterVersionConstraint(ctx) {
		console.log(ctx.children[1])
	}

	// Exit a parse tree produced by SolidityParser#versionConstraint.
	exitVersionConstraint(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#importDeclaration.
	enterImportDeclaration(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#importDeclaration.
	exitImportDeclaration(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#importDirective.
	enterImportDirective(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#importDirective.
	exitImportDirective(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#natSpec.
	enterNatSpec(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#natSpec.
	exitNatSpec(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#contractDefinition.
	enterContractDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#contractDefinition.
	exitContractDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#inheritanceSpecifier.
	enterInheritanceSpecifier(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#inheritanceSpecifier.
	exitInheritanceSpecifier(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#contractPart.
	enterContractPart(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#contractPart.
	exitContractPart(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#stateVariableDeclaration.
	enterStateVariableDeclaration(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#stateVariableDeclaration.
	exitStateVariableDeclaration(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#usingForDeclaration.
	enterUsingForDeclaration(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#usingForDeclaration.
	exitUsingForDeclaration(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#structDefinition.
	enterStructDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#structDefinition.
	exitStructDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#constructorDefinition.
	enterConstructorDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#constructorDefinition.
	exitConstructorDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#modifierDefinition.
	enterModifierDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#modifierDefinition.
	exitModifierDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#modifierInvocation.
	enterModifierInvocation(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#modifierInvocation.
	exitModifierInvocation(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionDefinition.
	enterFunctionDefinition(ctx) {
		this.metadata["function"] = (this.metadata["function"] || 0) + 1
	}

	// Exit a parse tree produced by SolidityParser#functionDefinition.
	exitFunctionDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#returnParameters.
	enterReturnParameters(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#returnParameters.
	exitReturnParameters(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#modifierList.
	enterModifierList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#modifierList.
	exitModifierList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#eventDefinition.
	enterEventDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#eventDefinition.
	exitEventDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#enumValue.
	enterEnumValue(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#enumValue.
	exitEnumValue(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#enumDefinition.
	enterEnumDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#enumDefinition.
	exitEnumDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#parameterList.
	enterParameterList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#parameterList.
	exitParameterList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#parameter.
	enterParameter(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#parameter.
	exitParameter(ctx) {
	}

	// Enter a parse tree produced by SolidityParser#eventParameterList.
	enterEventParameterList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#eventParameterList.
	exitEventParameterList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#eventParameter.
	enterEventParameter(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#eventParameter.
	exitEventParameter(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionTypeParameterList.
	enterFunctionTypeParameterList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#functionTypeParameterList.
	exitFunctionTypeParameterList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionTypeParameter.
	enterFunctionTypeParameter(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#functionTypeParameter.
	exitFunctionTypeParameter(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#variableDeclaration.
	enterVariableDeclaration(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#variableDeclaration.
	exitVariableDeclaration(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#typeName.
	enterTypeName(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#typeName.
	exitTypeName(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#userDefinedTypeName.
	enterUserDefinedTypeName(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#userDefinedTypeName.
	exitUserDefinedTypeName(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#mapping.
	enterMapping(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#mapping.
	exitMapping(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionTypeName.
	enterFunctionTypeName(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#functionTypeName.
	exitFunctionTypeName(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#storageLocation.
	enterStorageLocation(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#storageLocation.
	exitStorageLocation(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#stateMutability.
	enterStateMutability(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#stateMutability.
	exitStateMutability(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#block.
	enterBlock(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#block.
	exitBlock(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#statement.
	enterStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#statement.
	exitStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#expressionStatement.
	enterExpressionStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#expressionStatement.
	exitExpressionStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#ifStatement.
	enterIfStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#ifStatement.
	exitIfStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#whileStatement.
	enterWhileStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#whileStatement.
	exitWhileStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#simpleStatement.
	enterSimpleStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#simpleStatement.
	exitSimpleStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#forStatement.
	enterForStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#forStatement.
	exitForStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#inlineAssemblyStatement.
	enterInlineAssemblyStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#inlineAssemblyStatement.
	exitInlineAssemblyStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#doWhileStatement.
	enterDoWhileStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#doWhileStatement.
	exitDoWhileStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#continueStatement.
	enterContinueStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#continueStatement.
	exitContinueStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#breakStatement.
	enterBreakStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#breakStatement.
	exitBreakStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#returnStatement.
	enterReturnStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#returnStatement.
	exitReturnStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#throwStatement.
	enterThrowStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#throwStatement.
	exitThrowStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#emitStatement.
	enterEmitStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#emitStatement.
	exitEmitStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#variableDeclarationStatement.
	enterVariableDeclarationStatement(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#variableDeclarationStatement.
	exitVariableDeclarationStatement(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#variableDeclarationList.
	enterVariableDeclarationList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#variableDeclarationList.
	exitVariableDeclarationList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#identifierList.
	enterIdentifierList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#identifierList.
	exitIdentifierList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#elementaryTypeName.
	enterElementaryTypeName(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#elementaryTypeName.
	exitElementaryTypeName(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#expression.
	exitExpression(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#primaryExpression.
	enterPrimaryExpression(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#primaryExpression.
	exitPrimaryExpression(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#expressionList.
	enterExpressionList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#expressionList.
	exitExpressionList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#nameValueList.
	enterNameValueList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#nameValueList.
	exitNameValueList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#nameValue.
	enterNameValue(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#nameValue.
	exitNameValue(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionCallArguments.
	enterFunctionCallArguments(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#functionCallArguments.
	exitFunctionCallArguments(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#functionCall.
	enterFunctionCall(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#functionCall.
	exitFunctionCall(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyBlock.
	enterAssemblyBlock(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyBlock.
	exitAssemblyBlock(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyItem.
	enterAssemblyItem(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyItem.
	exitAssemblyItem(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyExpression.
	enterAssemblyExpression(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyExpression.
	exitAssemblyExpression(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyCall.
	enterAssemblyCall(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyCall.
	exitAssemblyCall(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyLocalDefinition.
	enterAssemblyLocalDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyLocalDefinition.
	exitAssemblyLocalDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyAssignment.
	enterAssemblyAssignment(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyAssignment.
	exitAssemblyAssignment(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyIdentifierOrList.
	enterAssemblyIdentifierOrList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyIdentifierOrList.
	exitAssemblyIdentifierOrList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyIdentifierList.
	enterAssemblyIdentifierList(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyIdentifierList.
	exitAssemblyIdentifierList(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyStackAssignment.
	enterAssemblyStackAssignment(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyStackAssignment.
	exitAssemblyStackAssignment(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#labelDefinition.
	enterLabelDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#labelDefinition.
	exitLabelDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblySwitch.
	enterAssemblySwitch(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblySwitch.
	exitAssemblySwitch(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyCase.
	enterAssemblyCase(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyCase.
	exitAssemblyCase(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyFunctionDefinition.
	enterAssemblyFunctionDefinition(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyFunctionDefinition.
	exitAssemblyFunctionDefinition(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyFunctionReturns.
	enterAssemblyFunctionReturns(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyFunctionReturns.
	exitAssemblyFunctionReturns(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyFor.
	enterAssemblyFor(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyFor.
	exitAssemblyFor(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyIf.
	enterAssemblyIf(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyIf.
	exitAssemblyIf(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#assemblyLiteral.
	enterAssemblyLiteral(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#assemblyLiteral.
	exitAssemblyLiteral(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#subAssembly.
	enterSubAssembly(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#subAssembly.
	exitSubAssembly(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#tupleExpression.
	enterTupleExpression(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#tupleExpression.
	exitTupleExpression(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#typeNameExpression.
	enterTypeNameExpression(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#typeNameExpression.
	exitTypeNameExpression(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#numberLiteral.
	enterNumberLiteral(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#numberLiteral.
	exitNumberLiteral(ctx) {
	}


	// Enter a parse tree produced by SolidityParser#identifier.
	enterIdentifier(ctx) {
	}

	// Exit a parse tree produced by SolidityParser#identifier.
	exitIdentifier(ctx) {
	}



}

module.exports = {SolidityListener}
