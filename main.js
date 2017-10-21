var prompt = require('prompt');
var inquirer = require('inquirer');

// Get the game, word and letter models
var game = require('./game.js');
var word = require('./word.js');

var escRst = '\x1b[0m';
var escBrt = '\x1b[1m';
var escRed = '\x1b[31m';
var escGrn = '\x1b[32m'; 

myGame = new game.game();

console.log("\x1b[1m"); 	// bright

inquirer.prompt([
  {
    type: 'list',
    name: 'theme',
    message: 'Pick a hangman category.',
    choices: [
      'Country names',
      new inquirer.Separator(),
      'Musical instruments',
      new inquirer.Separator(),
      'Animals',
      new inquirer.Separator(),
      'Cities of the World',
      new inquirer.Separator(),
    ]
  }
]).then(function (answers) {
  //console.log(JSON.stringify(answers, null, '  '));
  //console.log(answers);

  switch(answers.theme) {
      case 'Country names':
          myGame.initialize(0);
          break;
      case 'Musical instruments':
          myGame.initialize(1)
          break;
      case 'Animals':
          myGame.initialize(2);
          break;
      case 'Cities of the World':
          myGame.initialize(3);
          break;
      default:
      	  console.log(answers.theme);
          console.log("Error: Bad Word Bank number")
          break;
  }
  getInput();
});

// Run inquirer to get the user's input
var getInput = function() {
	//console.log("getInput");
	if (myGame.invalidGuesses.length>=myGame.maxInvalidGuesses) {
		console.log(escBrt+escRed+'Sorry - You Lose.'+escRst+escBrt + '(' + myGame.currentWord + ')' );
	}	
	if (myGame.winFlag===true) {
		console.log(escBrt+escGrn+'You WIN!!! Good job!'+escRst+escBrt);		
	}	
	if (myGame.invalidGuesses.length>=myGame.maxInvalidGuesses || myGame.winFlag===true) {
		console.log("Game Over");
		inquirer.prompt([
		{
			name: "replay",
			message: "Do you want to play again? y/n"
		}
		]).then(function(answers){
			//console.log(JSON.stringify(answers, null, '  '));

			var replay = answers.replay;
			if (answers.replay.length > 1) {
				replay = answers.replay[0];
			}
			if (replay.toLowerCase()=='n') {
				return;
			} else {
				goAgain();
			}
		});
		return;
	};

	inquirer.prompt([
	{
		name: "letter",
		message: "Guess a letter!"
	}
	]).then(function(answers){
		var letter = answers.letter;
		var procLtr = '';
		if (answers.letter.length > 1) {
			letter = answers.letter[0];
		}
		procLtr = myGame.processLetter(answers.letter.toLowerCase());
		//myGame.display();

		game.showHangman(myGame.invalidGuesses.length); // draw a pretty picture

		console.log(escBrt);
		console.log(myGame.displayWord());
		console.log();
		console.log((myGame.maxInvalidGuesses-myGame.invalidGuesses.length), " Guess(es) Remaining");
		console.log();
		//console.log("procLtr: (result from processing letter: ", procLtr);
		if (procLtr==='correct') {
			console.log(escBrt+escGrn+'CORRECT!!'+escRst+escBrt); 
		} else if (procLtr==='incorrect') {
			console.log(escBrt+escRed+'INCORRECT!'+escRst+escBrt);
		} else {
			console.log("Type an unused letter.")
		} 
		//console.log(myGame.winFlag);
		getInput();
	});

};

var goAgain = function() {
	//console.log("goAgain");
	myGame = new game.game();	
	inquirer.prompt([
	  {
	    type: 'list',
	    name: 'theme',
	    message: 'Pick a hangman category.',
	    choices: [
	      'Country names',
	      new inquirer.Separator(),
	      'Musical instruments',
	      new inquirer.Separator(),
	      'Animals',
	      new inquirer.Separator(),
	      'Cities of the World',
	      new inquirer.Separator(),
	    ]
	  }
	]).then(function (answers) {
	  console.log(JSON.stringify(answers, null, '  '));
	  //console.log(answers);
	
	  switch(answers.theme) {
	      case 'Country names':
	          myGame.initialize(0);
	          break;
	      case 'Musical instruments':
	          myGame.initialize(1)
	          break;
	      case 'Animals':
	          myGame.initialize(2);
	          break;
	      case 'Cities of the World':
	          myGame.initialize(3);
	          break;
	      default:
	      	  console.log(answers.theme);
	          console.log("Error: Bad Word Bank number")
	          break;
	  }
	  getInput();
	});
};
