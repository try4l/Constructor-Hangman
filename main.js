var prompt = require('prompt');
var inquirer = require('inquirer');

// Get the game, word and letter models
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');


//console.log("game", game);
//console.log("word", word);
//console.log("word.getRandomWord: ", word.getRandomWord);
//console.log("word.word: ", word.word);
//console.log("letter", letter);
myGame = new game.game();
myGame.initialize();
myGame.display();

var count = 0;

// var ui = new inquirer.ui.BottomBar();
// // Or simply write output
// ui.log.write('something just happened.');
// ui.log.write('Almost over, standby!');
// // During processing, update the bottom bar content to display a loader
// // or output a progress bar, etc
// ui.updateBottomBar('new bottom bar content');
// ui.updateBottomBar('different stuff');

// run the prompt or inquirer to get the user's input
var getInput = function() {
	if (count<5) {
		console.log("getInput");
		inquirer.prompt([
			{
				name: "letter",
				message: "Guess a letter!"
			}
		]).then(function(answers){
			var letter = answers.letter;
			console.log("letter: ", letter);
			count++;
			myGame = new Game();
			console.log("myGame: ", myGame);
			myGame.initialize();
			console.log("myGame: ", myGame);
			//console.log(getRandomWord());
			myGame.display();
			getInput();
		});		
	} else {
		console.log("Done for now.");
	}
};

//getInput();


// INIT
// do we have a game? if not, make one
// DISPLAY
// game.currentWord.displayLetters ( game.validGuesses)