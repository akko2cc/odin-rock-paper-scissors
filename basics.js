// document elements
const frame_picture = document.querySelectorAll('.frame-picture')
const title = document.querySelector(".title")
const selection_container = document.querySelector(".selection-container")
const reset_button = document.querySelector(".reset-button")
const stats_container = document.querySelector(".stats-container")
const player_scores = document.querySelector(".player-scores")
const enemy_scores = document.querySelector(".enemy-scores")
const current_round = document.querySelector(".current-round")

// global variables
const default_title = "Rock-Paper-Scissors"
let player_selected
let enemy_selected
let isTie = false
let currentRound = 1
let playerWins = 0, enemyWins = 0


// main run on load
function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3) + 1 // 1 to 3
    
    switch(pick)
    {
        case 1:
            enemy_selected = "rock"
            break;
        case 2:
            enemy_selected = "paper"
            break;
        case 3:
            enemy_selected = "scissors"
            break;
    }
}

function hideResetButton() {
    reset_button.style.display = "none"
}

function refreshStats() {
    player_scores.innerHTML = `[Player wins]<br>${playerWins}`
    enemy_scores.innerHTML = `[Enemy wins]<br>${enemyWins}`
    current_round.innerHTML = `[Current round]<br>${currentRound}`
}

function runOnLoad_functions() {
    getComputerChoice()
    hideResetButton()
    refreshStats()
}

window.onload = runOnLoad_functions

// part of event listener
function checkIFCurrentRound() {
    if (currentRound >= 5) return False
    return True
}

function checkIfPlayerWin(selected_id) {
    switch(selected_id)
    {
        case "rock-picture":
            player_selected = "rock"
            if (enemy_selected === "paper") return false
            else if (enemy_selected === "scissors") return true
            else if (enemy_selected === "rock") {
                isTie = true
                return false
            }
            break;
        case "paper-picture":
            player_selected = "paper"
            if (enemy_selected === "rock") return true
            else if (enemy_selected === "scissors") return false
            else if (enemy_selected === "paper") {
                isTie = true
                return false
            }
            break;
        case "scissors-picture":
            player_selected = "scissors"
            if (enemy_selected === "paper") return true
            else if (enemy_selected === "rock") return false
            else if (enemy_selected === "scissors") {
                isTie = true
                return false
            }
            break;
    }
}

function showResult(message, color) {
    title.innerHTML = `<span style="color:${color}">${message}</span><br>You chose: ${player_selected}<br>Enemy selected: ${enemy_selected}`
    title.style.textAlign = "center";
    selection_container.style.display = "none"
}

function showResetButton() {
    reset_button.style.display = ""
}

function reset() {
    selection_container.style.display = ""
    title.innerHTML = default_title
    player_selected = ""
    enemy_selected = ""
    isTie = false

    getComputerChoice()
    hideResetButton()
    currentRound++
}

// event listener
frame_picture.forEach(div => { 
    div.addEventListener('click', function() { 

        if (checkIFCurrentRound()) {

            if (checkIfPlayerWin(div.id)) {
                showResult("You win!", "green")
                playerWins++
            }
            else if (isTie) showResult("Its a tie!", "orange")
            else {
                showResult("You lose!", "red")
                enemyWins++
            }

            showResetButton()
            refreshStats()
        }
        else {
            alert("Only 5 rounds!")
        }
    }); 
});

reset_button.addEventListener('click', function() {
    reset()
})