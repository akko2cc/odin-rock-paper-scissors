// ----- INFORMATION -----
// PROJECT: ROCK PAPER SCISSORS
// AUTHOR: akko2cc
// FRAMEWORK: vanilla.JS
// CURRICULUM: The Odin Project (TOP)

// ----- FEATURES -----
// 1. support simple error handling
// 2. mainly console, alert, and prompt

function getComputerChoice() {
    let generatedNumber = Math.floor(Math.random() * 2 + 1)

    let pickArr = ["", "Rock", "Paper", "Scissors"]
    return pickArr[generatedNumber]
}

function getHumanChoice() {
    while (true) {
        let humanPick = prompt("(1) Rock, (2) Paper, (3) Scissors")
        if (humanPick === "1" || humanPick === "2" || humanPick === "3") {
            let pickArr = ["", "Rock", "Paper", "Scissors"]
            humanPick = pickArr[+humanPick]
            return humanPick
        }
        else alert("Invalid input.")
    }
}

function askStart() {
    while (true) {
        if (prompt("Do you want to start the game? (y/n)") === "y") {
            break
        }
    }
}

function playGame()  {

    let humanScore = 0, computerScore = 0
    let currentRound = 1, maxRound = 5

    function playRound(computerPick, humanPick) {

        calculateResults = (computerPick, humanPick) => {
            switch (computerPick) {
                case "Rock":
                    switch (humanPick) {
                        case "Rock":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nTie!`)
                            break
                        case "Paper":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Win!`)
                            humanScore++
                            break
                        case "Scissors":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Lose!`)
                            computerScore++
                            break
                    }
                    break
                case "Paper":
                    switch (humanPick) {
                        case "Rock":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Lose!`)
                            computerScore++
                            break
                        case "Paper":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nTie!`)
                            break    
                        case "Scissors":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Win!`)
                            humanScore++
                            break
                    }
                    break
                case "Scissors":
                    switch (humanPick) {
                        case "Rock":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Win!`)
                            humanScore++
                            break
                        case "Paper":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nYou Lose!`)
                            computerScore++
                            break
                        case "Scissors":
                            alert(`Player: ${humanPick}\nComputer: ${computerPick}\n\nTie!`)
                            break
                    }
                    break
            }
        }
    
        printGameValues = () => {
            alert(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n\nRound: ${currentRound}`)
        }
    
        calculateResults(computerPick, humanPick)
        printGameValues()
    
    }

    printWinner = (humanScore, computerScore) => {
        if (humanScore > computerScore) {
            alert("Player Wins!")
        }
        else if (humanScore < computerScore) {
            alert("Computer Wins!")
        }
        else alert("It's a Tie!")
    }

    while(currentRound <= maxRound) {
        const computerPick = getComputerChoice()
        const humanPick = getHumanChoice()

        playRound(computerPick, humanPick)
        currentRound++
    }

    printWinner(humanScore, computerScore)
}

// main run here

askStart() // verification
playGame() // game 5 rounds

