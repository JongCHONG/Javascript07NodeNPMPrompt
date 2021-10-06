var prompt = require("prompt")
var colors = require('colors')
const randomWordFR = require('random-word-fr')

prompt.start()

do {
    var mysteryWord = randomWordFR()   
} while (mysteryWord.length != 5) 
console.log(mysteryWord)

function motus() {
    prompt.get({ name: "motus", description: `Le mot commence par ${mysteryWord[0]}....` }, function (err, res) { // permet de paramétrer la question
        if (res.motus.length === 5){
            if (res.motus !== mysteryWord){
                for (var i = 0; i < res.motus.length; i++) {
                    for(var j = 0; j < mysteryWord.length; j++) {
                        if (res.motus[i] === mysteryWord[j]) {
                            console.log(res.motus[i].red)
                        } else {
                            console.log(res.motus[i])
                        }
                    }
                }
                console.log("Essayez encore!")
                motus()
            } else {
                console.log("MOTUS! Bien joué!")
            }
        } else {
            console.log("Le mot doit contenir 5 lettres...")
            motus()
        }
    })
}
motus()