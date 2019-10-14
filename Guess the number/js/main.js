
const playButton = document.getElementById("play-button");
const submitButton = document.getElementById("submit-button");
const pastGuess = document.getElementById("past-guess");
const comment = document.getElementById("comment");
const inputNumber = document.getElementById("input-number");
const title = document.getElementById("title");
playButton.addEventListener('click',startGame);
 let playerTurns, guessNumber;

function startGame(){
  submitButton.addEventListener('click',submitNumber);
  title.style.letterSpacing = '4px';
  playerTurns = 0;
  guessNumber = Math.floor(Math.random()*100);
  inputNumber.value = "";
  console.log(guessNumber);
  pastGuess.innerHTML = "";
  comment.innerHTML = "";

  function submitNumber(){

	if(inputNumber.value == guessNumber){
		comment.innerHTML = "<p class = 'bg-success'>You guessed it right.</p>"
		playButton.innerHTML = "Play again";
	}else if(inputNumber.value > guessNumber) {
		comment.innerHTML = "<p class = 'bg-danger'>Your guess is too high</p>"	
		pastGuess.innerHTML += "   <span style ='color:red'>" + inputNumber.value + "</span>";
		inputNumber.value = "";
		playerTurns+=1;
		
	}else if(inputNumber.value < guessNumber) {
		comment.innerHTML = "<p class = 'bg-warning text-dark'>Your guess is too low</p>"	
		pastGuess.innerHTML += "   <span style ='color:yellow'>" + inputNumber.value + "</span>";
		inputNumber.value = "";
		playerTurns+=1;
	}

  	if(playerTurns === 10){
  		alert("You lost, Try again.");
		startGame();
  	}
}

}

