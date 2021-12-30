const antlr4 = require("antlr4/index")
const fs = require("fs")
const solLexer = require("../utils/antlr/SolidityLexer")
const solParser = require("../utils/antlr/SolidityParser")
const solListener = require("../utils/antlr/SolidityListener")


let generateMetadata = (sourceCodePath) => {
    let input = fs.readFileSync(sourceCodePath, 'UTF-8')
    let chars = new antlr4.InputStream(input)
    let lexer = new solLexer.SolidityLexer(chars)
    let tokens  = new antlr4.CommonTokenStream(lexer)
    let parser = new solParser.SolidityParser(tokens)
    parser.buildParseTrees = true

    var tree = parser.program()
    var extractor = solListener()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)
}

module.exports = {
    generateMetadata
}