console.log('game file is loaded');

// Get the word and letter models
var word = require('./word.js');
var letter = require('./letter.js');

var Game = function () {
  this.currentWord = null;
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

Game.prototype.displayWord = function () {
  // iterate over word letters
  // check if letter is in validGuesses
  // display letter or '_'
  // return display
};


module.exports = {
  game: Game,
}