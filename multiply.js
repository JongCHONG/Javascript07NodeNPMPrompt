var args = process.argv.slice(2)
if (args.length !== 1) {
    console.log("Error")
} else {
    multiply(Number(args[0]))
}

function multiply(num) {
    for (var i = 1; i <= 10; i++){
        console.log(i + " x " + num + " = " + i * num)
    }
}