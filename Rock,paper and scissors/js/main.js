const game = () =>{
	let pScore = 0;
	let cScore = 0;

	const intro = () =>{
		const play = document.querySelector(".intro button");
		const match = document.querySelector(".match");
		const intro = document.querySelector(".intro");

		

		play.addEventListener("click",()=>{
			intro.classList.add("fade-out");
			match.classList.remove("fade-out");
			match.classList.add("fade-in");
		})
	}

	const playMatch = () =>{
		const options = document.querySelectorAll(".options button");
		const compHand = document.querySelector(".computer-hand");
		const playHand = document.querySelector(".player-hand");
		const hands = document.querySelectorAll(".hands img");
		
		hands.forEach(hand => {
			hand.addEventListener("animationend",function(){
				hand.style.animation = "";
			})
		})

		const computerOptions = ["rock","paper","scissors"];
		options.forEach(option => {
			option.addEventListener("click",function(){
				const computerNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(()=>{
					compareHands(computerChoice,this.textContent);
					playHand.src = 'img/' + this.textContent + '.png';
					compHand.src = 'img/' + computerChoice + '.png';

				},2000);
			
				playHand.style.animation ="shakePlayer 2s ease";
				compHand.style.animation ="shakeComputer 2s ease";
			})
		})
	}
	const updateScore = () =>{
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");

		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	}


	const compareHands = (computerChoice, playerChoice) =>{
		const winner = document.querySelector(".winner");
		if(playerChoice === computerChoice){
			winner.textContent = "DRAW!";
			return;
		}

		if(playerChoice === 'rock'){
			if(computerChoice === 'scissors'){
				winner.textContent = "Player Wins!";
				pScore++;
				updateScore();
				return;
			}else if(computerChoice === 'paper'){
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			}
		}

		if(playerChoice === 'paper'){
			if(computerChoice === 'scissors'){
				winner.textContent = "Computer Wins!";
				cScore++;
				updateScore();
				return;
			}else if(computerChoice === 'rock'){
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}

			if(playerChoice === 'scissors'){
			if(computerChoice === 'rock'){
				winner.textContent = "Computer Wins!";
				cScore++;
				updateScore();
				return;
			}else if(computerChoice === 'paper'){
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}





	}




	intro();
	playMatch();
}

game();