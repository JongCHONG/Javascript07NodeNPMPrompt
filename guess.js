var prompt = require("prompt");

prompt.start();

var mysteryNum = random()
console.log(mysteryNum)

function play() {
  prompt.get({ name: "guess", description: "Quel est le nombre mystère ?" }, function (err, res) { // permet de paramétrer la question
    if (res.guess === mysteryNum) { // valide la saisie
        console.log("Bravo!")
    } else if (res.guess < mysteryNum){
        console.log("C'est plus")
        play() // relance le prompt si la saisie n'est pas valide
    }else if (res.guess > mysteryNum){
        console.log("C'est moins")
        play() // relance le prompt si la saisie n'est pas valide
    }
  })
}

function random() {
    var min = 1
    var max = 100
    
     return Math.floor(Math.random() * (max - min + 1) + min)
}
play(); // on n'oublie pas d'appeler la fonction ;)