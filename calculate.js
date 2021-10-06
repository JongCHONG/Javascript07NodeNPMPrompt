var args = process.argv.slice(2)
if (args.length !== 5) {
    console.log("Error")
} else {
    calculate(args)
}

function calculate(args) {
    var num1 = Number(args[0])
    var num2 = Number(args[2])
    var total = 0
    switch (args[1]) {
        case "+":
            total = num1 + num2
            break;
        case "-":
            total = num1 - num2
            break;
        case "x":
            total = num1 * num2
            break;
        case "/":
            total = num1 / num2
            break;
        case "%":
            total = num1 % num2
            break;
            
            default:
                break;
    }
    console.log(`${args[0]} ${args[1]} ${args[2]} = ${total}`)
}

