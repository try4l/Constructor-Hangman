var prompt = require('prompt');
var inquirer = require('inquirer');

// Get the game, word and letter models
var game = require('./game.js');
var word = require('./word.js');

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

//myGame.initialize();
//myGame.display();


// var str = 'Abc';
// console.log("str[0].toLowerCase()", str[0].toLowerCase());

// if (myGame.processLetter('a') == true) {
// 	console.log("myGame.processLetter returned true");
// } else {
// 	console.log("myGame.processLetter returned false");
// }
// myGame.processLetter('b');
// myGame.processLetter('c');
// if (myGame.processLetter('a') == true) {
// 	console.log("myGame.processLetter returned true");
// } else {
// 	console.log("myGame.processLetter returned false");
// }

// myGame.display();
// 
// 

//var count = 0;

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
		//console.log("getInput");	
	if (myGame.invalidGuesses.length>myGame.maxInvalidGuesses) {
		console.log("Game Over");
		inquirer.prompt([
		{
			name: "replay",
			message: "Do you want to play again? y/n"
		}
		]).then(function(answers){
			console.log(JSON.stringify(answers, null, '  '));

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
			if (answers.letter.length > 1) {
				letter = answers.letter[0];
			}
			//console.log("letter: ", letter);
			//count++;
			//myGame = new Game();
			//console.log("myGame: ", myGame);
			//myGame.initialize();
			//console.log("myGame: ", myGame);
			//console.log(getRandomWord());
			myGame.processLetter(answers.letter.toLowerCase());
			myGame.display();
			game.showHangman(myGame.invalidGuesses.length);
			console.log(myGame.displayWord());
			getInput();
		});

};

var goAgain = function() {

		//console.log("getInput");
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

//getInput();


// INIT
// do we have a game? if not, make one
// DISPLAY
// game.currentWord.displayLetters ( game.validGuesses)
