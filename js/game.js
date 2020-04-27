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

btnRock.addEventListener('click', {
	handleEvent: function (event) {
		alert(event + ' Rock clicked through handleEvent property!');
	}
});

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
	let options = [rock, paper, scissors];
	let decision = getRandomInt(3);
	return options[decision];
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
	if( ( ( playerSelection == rock ) && ( computerSelection == scissors ) ) ||
		( ( playerSelection == scissors ) && ( computerSelection == paper ) ) ||
		( ( playerSelection == paper ) && ( computerSelection == rock ) ) ){
		return "You won! " + playerSelection + " beats " + computerSelection;
	}else if ( playerSelection == computerSelection ){
		return "Tie!";
	}else{
		return "You lose! " + computerSelection + " beats " + playerSelection;
	}
}

function game(){}

game();
