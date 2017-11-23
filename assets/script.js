/* Basic Setup
** Set wins, losses to zero and reset guesses
** Choose a random letter for guessing
*/
var wins = 0, losses = 0, guessleft = 9, guess = "A";
document.onload = newGame();
var pastguesses;
var letter;

//Press enter to guess
/*
function isGuess(event){
	if(event.which == 13){
		newGuess();
	}
}
*/

/* Guess Function
** Take away from guess count (and update UI to reset guess field and number of guesses left)
** If guess correctly, congratulate user, increment wins and reset
** If out of guesses, console user, increment losses and reset
** Else, 
*/
function newGuess(){
	guessleft --;
	guess = document.getElementById('guess').value.toUpperCase().substr(0, 1);
	document.getElementById('numguess').innerHTML = guessleft;
	document.getElementById('guess').value = "";

	if( guess == letter ){
		//congrats
		wins ++;
		document.getElementById('numwin').innerHTML = wins;
		document.getElementById('modal').style.display = 'block';
		document.getElementById('modal-win').style.display = 'block';
		newGame();
	} else if( guessleft < 1 ){
		//sorry
		losses ++;
		document.getElementById('numloss').innerHTML = losses;
		document.getElementById('modal-lose-letter').innerHTML = letter;
		document.getElementById('modal').style.display = 'block';
		document.getElementById('modal-lose').style.display = 'block';
		newGame();
	} else{
		var p = document.createElement('li');
		var g = document.createTextNode(guess);
		p.appendChild(g);
		document.getElementById('pastguessvalues').appendChild(p);
	}

}

/* New Game
** Reset number of guesses
** Clear html of past guesses
** Generate a new letter to guess  
*/
function newGame(){
	letter = String.fromCharCode(65 + Math.round(Math.random()*25));
	console.log('System gen letter ' + letter);

	guessleft = 9;
	document.getElementById('numguess').innerHTML = guessleft;
	document.getElementById('pastguessvalues').innerHTML = '';

}
