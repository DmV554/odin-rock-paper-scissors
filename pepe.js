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

function playRound(humanChoice, computerChoice) {
    //console.log(humanChoice)
    //console.log(computerChoice)

    const contChoices = document.querySelector(".choices")
    contChoices.replaceChildren()

    const humanChoiceDom = document.createElement("div")
    humanChoiceDom.textContent = `Jugador escogió: ${humanChoice}`
    contChoices.appendChild(humanChoiceDom) 

    const computerChoiceDom = document.createElement("div")
    computerChoiceDom.textContent = `Máquina escogió: ${computerChoice}`
    contChoices.appendChild(computerChoiceDom) 

    const resultados = document.querySelector(".resultados")
    resultados.replaceChildren();

    const contWinner = document.querySelector(".ganador")
    if (contWinner.firstChild) { 
        contWinner.removeChild(contWinner.firstChild); 
    }

    if(humanChoice === computerChoice) {
        const empate = document.createElement("div");
        empate.textContent = "Empate";
        resultados.appendChild(empate)
        //console.log("Empate")
    }

    if(humanChoice != computerChoice) {
        if(humanChoice === "piedra" && computerChoice === "tijera") {
            const ganador = document.createElement("div")
            ganador.textContent = "Ganaste"
            resultados.appendChild(ganador)
            //console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "piedra" && computerChoice === "papel") {
            const perdedor = document.createElement("div")
            perdedor.textContent = "Perdiste"
            resultados.appendChild(perdedor)
           // console.log("Perdiste")
            computerScore += 10
        } else if(humanChoice === "papel" && computerChoice === "piedra") {
            const ganador = document.createElement("div")
            ganador.textContent = "Ganaste"
            resultados.appendChild(ganador)

            //console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "papel" && computerChoice === "tijera") {
            const perdedor = document.createElement("div")
            perdedor.textContent = "Perdiste"
            resultados.appendChild(perdedor)
            //console.log("Perdiste")
            computerScore += 10
        } else if(humanChoice === "tijera" && computerChoice === "papel") {
            const ganador = document.createElement("div")
            ganador.textContent = "Ganaste"
            resultados.appendChild(ganador)

            //console.log("Ganaste")
            userScore += 10
        } else if(humanChoice === "tijera" && computerChoice === "piedra") {
            const perdedor = document.createElement("div")
            perdedor.textContent = "Perdiste"
            resultados.appendChild(perdedor)
            //console.log("Perdiste")
            computerScore += 10

        }
    }



    const contPoints = document.querySelector(".puntos")
    contPoints.replaceChildren()

    const userScoreDom = document.createElement("div")
    userScoreDom.textContent = `Puntos usuario: ${userScore}`
    contPoints.appendChild(userScoreDom)

    const computerScoreDom = document.createElement("div")
    computerScoreDom.textContent = `Puntos computadora: ${computerScore}`
    contPoints.appendChild(computerScoreDom)

    
    if(userScore === 50) {
        const winner = document.createElement("div")
        winner.textContent = `El ganador es: Jugador`
        contWinner.appendChild(winner)

        userScore = 0
        computerScore = 0
    }

    if(computerScore === 50) {
        const winner = document.createElement("div")
        winner.textContent = `El ganador es: Máquina`
        contWinner.appendChild(winner)

        
        userScore = 0
        computerScore = 0
    }


}


const btnPiedra = document.querySelector(".piedra")
const btnPapel = document.querySelector(".papel")
const btnTijera = document.querySelector(".tijera")

btnPiedra.addEventListener("click", () => {
    playRound("piedra", getComputerChoice())
})

btnPapel.addEventListener("click", () => {
    playRound("papel", getComputerChoice())
})

btnTijera.addEventListener("click", () => {
    playRound("tijera", getComputerChoice())
})

