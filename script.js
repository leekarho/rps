function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let comp = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    let p1 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    switch(p1 + comp) {
        case("RockRock"):
        case("PaperPaper"):
        case("ScissorsScissors"):
            return("It's a draw!")
            break;
        case("RockScissors"):
        case("PaperRock"):
        case("ScissorsPaper"):
            return(`You win!`)
            break;
        case("RockPaper"):
        case("PaperScissors"):
        case("ScissorsRock"):
            return(`You lose!`)
            break;
    }
}

function endGame() {
    if (compScore == 5) {
        result.textContent = 'Computer Wins!'
        resetGame();
    } else if (p1Score == 5) {
        result.textContent = 'You Win!'
        resetGame();
    }
}

function resetGame() {
    p1Score = 0;
    compScore = 0;
    playerScore.textContent = `Player 1: ${p1Score}`
    computerScore.textContent = `Computer: ${compScore}`
}

function game() {
    let gameResult = document.querySelector('#result')
    let playerScore = document.querySelector('#playerScore')
    let computerScore = document.querySelector('#computerScore')
    const btn = Array.from(document.querySelectorAll('button'))
    btn.forEach((button) => {button.addEventListener('click', function(e) {
        let comp = getComputerChoice();
        let p1 = (this.id)
        let result = playRound(p1, comp);

        if (result === 'You win!') {
            p1Score += 1;
            gameResult.textContent = `You win! Player 1: ${p1}. Computer: ${comp}`;
            playerScore.textContent = `Player 1: ${p1Score}`;
        } else if (result === `You lose!`) {
            compScore += 1;
            gameResult.textContent = `You lose! Player 1: ${p1}. Computer: ${comp}`;
            computerScore.textContent = `Computer: ${compScore}`;
        } else if (result === "It's a draw!") {
            gameResult.textContent = `Draw! Player 1: ${p1}. Computer: ${comp}`;
        }
        endGame()
        })      
    })
}

let p1Score = 0;
let compScore = 0;

game();

