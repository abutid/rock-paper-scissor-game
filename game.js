const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //Start the Game
    const startGame = () => {
        const playerButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playerButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //update the state of game calls compare hands 
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `/gameicons/${this.textContent}.png`;
                    computerHand.src = `/gameicons/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const pScore = document.querySelector(".player-score p");
        const comScore = document.querySelector(".computer-score p");
        pScore.textContent = playerScore;
        comScore.textContent = computerScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }
        //Check hand if its Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                computerScore++;
                updateScore();
                return;
            }
        }
        //Check hand if its Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                playerScore++;
                updateScore();
                return;
            }
        }
        //Check hand if its Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                playerScore++;
                updateScore();
               return;
            }
        }
    };

    //calls all the inner function
    startGame();
    playMatch();
};

//start the game 
game();
