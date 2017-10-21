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
  console.log("processLetter: ltr ", ltr);
  // iterate over word letters
  // check if letter belongs in validGuesses or belongs in invalidGuesses
  // return false if letter already used

  for (var i = 0; i < this.currentWord.length; i++) {
    //console.log("this.currentWord[i].toLowerCase() ", this.currentWord[i].toLowerCase()); 
    if (this.currentWord[i].toLowerCase() === ltr) { // the letter is in the word
      console.log("ltr found in word");
      // is it already in the validGuesses?
      for (var j = 0; j < this.validGuesses.length; j++) {
        if (this.validGuesses[j] === ltr) {
          return(false); // letter already used
        }
      }
    // letter belongs in validGuesses
    this.validGuesses.push(ltr);
    return (true);
    }
  };  
  // } else {  // the letter is not in the word
  console.log("ltr not found in word");
  // is it already in the invalidGuesses?
  for (var i = 0; i < this.invalidGuesses.length; i++) {
    if (this.invalidGuesses[i] === ltr) {
      return(false); // letter already used
    }
  };
  // letter belongs in invalidGuesses
  this.invalidGuesses.push(ltr);
  return (true);
};

Game.prototype.displayWord = function () {
  // iterate over word letters
  // check if letter is in validGuesses
  // display letter or '_'
  // return display string
  dspWrdArr = [];
  var newMatch = false;

  for (var i = 0; i < this.currentWord.length; i++) {
    newMatch = false;
    for (var j = 0; j < this.validGuesses.length; j++) {
      if (this.currentWord[i].toLowerCase() === this.validGuesses[j]) {
        // found a valid guess for this word position
        //console.log("valid letter at index: ", i);
        dspWrdArr.push(this.currentWord[i]);
        dspWrdArr.push(' ');
        newMatch = true;
      }
    }
    if (newMatch!=true) {
      // did not find a valid letter at this word position
      //console.log("no valid letter at index: ", i);
      dspWrdArr.push('_ ');
      //dspWrdArr.push('_');
      //dspWrdArr.push(' ');      
    } 
  }
  //console.log("dspWrdArr: ", dspWrdArr);
  return (dspWrdArr.join(''));
};

module.exports = {
  game: Game,
}