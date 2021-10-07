var multiply = require("./table-utils.js").multiply
var addition = require("./table-utils.js").addition
var table_utils = require("./table-utils.js")

var args = process.argv.slice(2)
if (args.length !== 1) {
    console.log("Error")
} else {
    multiply(Number(args[0]))
    table_utils.addition(Number(args[0])) // d'autres maniere d'ecrire
}
