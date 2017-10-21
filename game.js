console.log('game file is loaded');

// Get the word and letter models
var word = require('./word.js');
var letter = require('./letter.js');

var Game = function () {
  this.currentWord = null;
  this.displayedWordArr = [];
  this.validGuesses = [];
  this.invalidGuesses = [];
  this.maxInvalidGuesses = 11;
  this.wins = 0;
  this.losses = 0;
};

Game.prototype.initialize = function (bank) {
  this.currentWord = word.getRandomWord(bank);
};

Game.prototype.display = function () {
  console.log("currentWord: ", this.currentWord);  
  console.log("validGuesses: ", this.validGuesses);  
  console.log("invalidGuesses: ", this.invalidGuesses);  
  console.log("maxInvalidGuesses:", this.maxInvalidGuesses);  
  console.log("wins:", this.wins);  
  console.log("losses:", this.losses);  
};

Game.prototype.processLetter = function (ltr) {
  // iterate over word letters
  // check if letter is in validGuesses or belongs in invalidGuesses
  for (var i = 0; i < currentWord.length; i++) { 
    if (currentWord[i].toLowerCase() === ltr) { // the letter is in the word
      // is it already in the validGuesses?

    } else {  // the letter is not in the word
      // is it already in the invalidGuesses?
  }
};

Game.prototype.displayWord = function () {
  // iterate over word letters
  // check if letter is in validGuesses
  // display letter or '_'
  // return display string
  for (var i = 0; i < currentWord.length; i++) {
    for (var j = 0; j < validGuesses.length; j++) {

      if (currentWord[i].toLowerCase() === validGuess[j]) {
        this.displayedWordArr.push(currentWord[i]);
        this.displayedWordArr.push(' ');
      } else {
        this.displayedWordArr.push('_ ');
      }

    }
  }
  return (this.displayedWordArr.join(''));
};

module.exports = {
  game: Game,
}