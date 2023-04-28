function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
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
            console.log("draw")
            return("It's a draw!")
            break;
        case("RockScissors"):
        case("PaperRock"):
        case("ScissorsPaper"):
            console.log(`You win! ${p1} beats ${comp}!`)
            return(`You win!`)
            break;
        case("RockPaper"):
        case("PaperScissors"):
        case("ScissorsRock"):
            console.log(`You lose! ${p1} loses to ${comp}!`)
            return(`You lose!`)
            break;
        default: console.log("Invalid selection");
    }
}

function game(e) {
    let p1Score = 0;
    let compScore = 0;
    console.log(this.id)

    for (let i=0;; i++) {
        if (p1Score === 5 || compScore === 5) { break; }
            let comp = getComputerChoice();
            let p1 = this.id
            let result = playRound(p1, comp);
            
            if (result === `You win!`) {
                p1Score++;
                console.log(`P1: ${p1Score}`)
            } else if (result === `You lose!`) {
                compScore++;
                console.log(`Computer: ${compScore}`);
            }
    }
}

const btn = Array.from(document.querySelectorAll('button'))
btn.forEach((button) => {
    button.addEventListener('click', game)
    })
