function multiply(num) {
    for (var i = 1; i <= 10; i++){
        console.log(i + " x " + num + " = " + i * num)
    }
}
function addition(num) {
    for (var i = 1; i <= 10; i++){
        console.log(i + " + " + num + " = " + i + num)
    }
}

module.exports = {
    multiply,
    addition,
}
