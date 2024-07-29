let computerScore = 0
let userScore = 0

function getComputerChoice() {
    const randomResult = Math.random()

    if(randomResult > 0 && randomResult < 0.33) {
        return "piedra"
    } else if(randomResult > 0.33 && randomResult < 0.67) {
        return "papel"
    } else if(randomResult > 0.67){
        return "tijera"
    }
}


function getHumanChoice() {
   const choice = prompt("Seleccione 'piedra', 'papel' o 'tijera'").toLowerCase();

   if (choice !== "piedra" && choice !== "papel" && choice !== "tijera") {
    return null;
   }

   return choice

}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)

    if(humanChoice === computerChoice) {
        console.log("Empate")
        return 
    }

    if(humanChoice != computerChoice) {
        if(humanChoice === "piedra" && computerChoice === "tijera") {
            console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "piedra" && computerChoice === "papel") {
            console.log("Perdiste")
            computerScore += 10
        } else if(humanChoice === "papel" && computerChoice === "piedra") {
            console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "papel" && computerChoice === "tijera") {
            console.log("Perdiste")
            computerScore += 10
        } else if(humanChoice === "tijera" && computerChoice === "papel") {
            console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "tijera" && computerChoice === "piedra") {
            console.log("Perdiste")
            computerScore += 10

        }
    }

}


function playGame() {
    for(i=0; i<5; i++) {
        const humanSelection = getHumanChoice();

        if(humanSelection === null) {
            console.log("Elección invalida");
            return
        }
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Puntos usuario: ${userScore}`)
        console.log(`Puntos computadora: ${computerScore}`)
    }
}

playGame()
