const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const lizard = "lizard";
const spock = "spock";
var FIVE = 5;
var PLAYER_SCORE = 0;
var COMPUTER_SCORE = 0;

const btnRock = document.getElementById(rock);
const btnPaper = document.getElementById(paper);
const btnScissors = document.getElementById(scissors);
const btnLizard = document.getElementById(lizard);
const btnSpock = document.getElementById(spock);

h1winner = document.createElement("h1");

/* Events Start Here */
btnRock.addEventListener('click', function(e) {
	console.log(e + ': Rock!');
	console.log(playRound(rock, computerPlay()));
});

btnPaper.addEventListener('click', function(e) {
	console.log(e + ': Paper!');
	console.log(playRound(paper, computerPlay()));
});

btnScissors.addEventListener('click', function(e){
	console.log(e + ': Scissors!');
	console.log(playRound(scissors, computerPlay()));
});

btnLizard.addEventListener('click', function(e){
	console.log(e + ': Lizard!');
	console.log(playRound(lizard, computerPlay()));
});

btnSpock.addEventListener('click', function(e){
	console.log(e + ': Spock!');
	console.log(playRound(spock, computerPlay()));
});
/* Events Finish Here */

function resetGame(whoWon){
	PLAYER_SCORE = 0;
	COMPUTER_SCORE = 0;
	let str = "";
	if(whoWon == "player"){
		str = "YOU WON!\nStarting new game";
		h1winner.innerHTML = str;
		let scoreDiv = document.getElementById("player");
		document.body.insertBefore(h1winner, scoreDiv);
	}else if(whoWon == "computer"){
		str = "COMPUTER WON!\nStarting new game";
		h1winner.innerHTML = str;
		let scoreDiv = document.getElementById("player");
		document.body.insertBefore(h1winner, scoreDiv);
	}
	h1player = document.getElementById("playerScore");
	h1player.innerHTML = PLAYER_SCORE;
	h1computer = document.getElementById("computerScore");
	h1computer.innerHTML = COMPUTER_SCORE;
	return str;
}

function printScore(whoScored, playerSelection, computerSelection){
	let str = "";
	if(whoScored == "player"){
		str = "Point to you!\n";
		str += playerSelection + " beats " + computerSelection + "\n";
		str += "Score : \n";
		str += "You: " + PLAYER_SCORE + ". Computer: " + COMPUTER_SCORE + "\n";
		h1player = document.getElementById("playerScore");
		h1player.innerHTML = PLAYER_SCORE;
		inputComputerSelection = document.getElementById("computerSelection");
		inputComputerSelection.src = "media/evil" + computerSelection + ".png";
	}else if(whoScored == "computer"){
		str = "Point to computer!\n";
		str += playerSelection + " loses to " + computerSelection + "\n";
		str += "Score : \n";
		str += "You: " + PLAYER_SCORE + ". Computer: " + COMPUTER_SCORE + "\n";
		h1computer = document.getElementById("computerScore");
		h1computer.innerHTML = COMPUTER_SCORE;
		inputComputerSelection = document.getElementById("computerSelection");
		inputComputerSelection.src = "media/evil" + computerSelection + ".png";
	}else{
		str = "Tie!\n";
		str += playerSelection + " is equal to " + computerSelection + "\n";
		str += "Score : \n";
		str += "You: " + PLAYER_SCORE + ". Computer: " + COMPUTER_SCORE + "\n";
		inputComputerSelection = document.getElementById("computerSelection");
		inputComputerSelection.src = "media/evil" + computerSelection + ".png";
	}
	return str;
}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
	let options = [rock, paper, scissors, lizard, spock];
	let decision = getRandomInt(FIVE);
	return options[decision];
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
	h1winner.remove();
	let str = "";
	if( ( ( playerSelection == rock ) &&
			( computerSelection == scissors || computerSelection == lizard ) ) ||
		( ( playerSelection == scissors ) &&
			( computerSelection == paper || computerSelection == lizard ) ) ||
		( ( playerSelection == paper ) &&
			( computerSelection == rock || computerSelection == spock ) ) ||
		( ( playerSelection == lizard ) &&
			( computerSelection == spock || computerSelection == paper ) ) ||
		( ( playerSelection == spock ) &&
			( computerSelection == scissors || computerSelection == rock ) ) ){
		PLAYER_SCORE++;
		if(PLAYER_SCORE == FIVE){
			str = resetGame("player");
		}else{
			str = printScore("player", playerSelection, computerSelection);
		}
		return str;
	}else if ( playerSelection == computerSelection ){
		str = printScore("nobody", playerSelection, computerSelection);
		return str;
	}else{
		COMPUTER_SCORE++
		if(COMPUTER_SCORE == FIVE){
			str = resetGame("computer");
		}else{
			str = printScore("computer", playerSelection, computerSelection);
		}
		return str;
	}
}
