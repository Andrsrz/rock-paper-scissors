const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const lizard = "lizard";
const spock = "spock";
const won = "won";
const lose = "lose";

const btnRock = document.getElementById(rock);
const btnPaper = document.getElementById(paper);
const btnScissors = document.getElementById(scissors);
const btnLizard = document.getElementById(lizard);
const btnSpock = document.getElementById(spock);

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

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
	let options = [rock, paper, scissors, lizard, spock];
	let decision = getRandomInt(5);
	return options[decision];
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
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
		return "You won! " + playerSelection + " beats " + computerSelection;
	}else if ( playerSelection == computerSelection ){
		return "Tie!" + playerSelection + " is equal to " + computerSelection;
	}else{
		return "You lose! " + computerSelection + " beats " + playerSelection;
	}
}
