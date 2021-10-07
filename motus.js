var prompt = require("prompt")
var colors = require('colors')
const randomWordFR = require('random-word-fr')
var result = ""
var isMotus = false

prompt.start()

do {
    var mysteryWord = randomWordFR()   
} while (mysteryWord.length != 5) 
console.log(mysteryWord)

function motus() {
    prompt.get({ name: "motus", description: `Le mot commence par ${mysteryWord[0]}....` }, function (err, res) { // permet de paramétrer la question
        if (res.motus.length === 5){ //si le mot entrée a 5 lettres
            if (res.motus !== mysteryWord){  // si les deux mots sont differents
                result =  ""
                for (var i = 0; i < res.motus.length; i++) {
                    isMotus = false
                    for(var j = 0; j < mysteryWord.length; j++) {
                        if (res.motus[i] === mysteryWord[j]) {
                            isMotus = true
                            if (res.motus.indexOf(res.motus[i]) === mysteryWord.indexOf(mysteryWord[j])) {
                                result = result + res.motus[i].red
                                break
                            } else {
                                result = result + res.motus[i].yellow
                                break
                            }
                        } 
                    }
                    if (isMotus == false) {
                        result = result + res.motus[i]
                    }
                }
                console.log(result)
                console.log("Essayez encore!")
                motus()
            } else {
                console.log("Tututututu MOTUS! Bien joué!")
            }
        } else {
            console.log("Le mot doit contenir 5 lettres...")
            motus()
        }
    })
}
motus()