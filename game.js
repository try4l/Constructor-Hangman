console.log('game file is loaded');

// Get the word and letter models
var word = require('./word.js');
//var letter = require('./letter.js');

// global flags 
gblWins = 0;
gblLosses = 0;

var Game = function () {
  this.currentWord = null;
  this.displayedWordArr = [];
  this.validGuesses = [];
  this.invalidGuesses = [];
  this.maxInvalidGuesses = 9;
  this.winFlag = false;
};

Game.prototype.initialize = function (bank) {
  this.currentWord = word.getRandomWord(bank);
};

Game.prototype.display = function () {
  console.log("currentWord: ", this.currentWord);  
  console.log("validGuesses: ", this.validGuesses);  
  console.log("invalidGuesses: ", this.invalidGuesses);  
  console.log("maxInvalidGuesses:", this.maxInvalidGuesses);  
  console.log("wins:", gblWins);  
  console.log("losses:", gblLosses); 
  console.log("winFlag:", this.winFlag);  
};

Game.prototype.processLetter = function (ltr) {
  // iterate over word letters
  // check if letter belongs in validGuesses or belongs in invalidGuesses
  // return true or false if guess is right or wrong, respectively

  for (var i = 0; i < this.currentWord.length; i++) {
    //console.log("this.currentWord[i].toLowerCase() ", this.currentWord[i].toLowerCase()); 
    if (this.currentWord[i].toLowerCase() === ltr) { // the letter is in the word
      // is it already in the validGuesses?
      for (var j = 0; j < this.validGuesses.length; j++) {
        if (this.validGuesses[j] === ltr) {
          return("usedLetter"); // letter already used
        }
      }
    // letter belongs in validGuesses
    this.validGuesses.push(ltr);
    return ("correct");
    }
  };  
  // the letter is not in the word
  // is it already in the invalidGuesses?
  for (var i = 0; i < this.invalidGuesses.length; i++) {
    if (this.invalidGuesses[i] === ltr) {
      return("usedLetter"); // letter already used
    }
  };
  // letter belongs in invalidGuesses
  this.invalidGuesses.push(ltr);
  return ("incorrect");
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
      if (this.currentWord[i] != " ") {  // skip spaces
        dspWrdArr.push('_');
        dspWrdArr.push(' ');
      } else {                // but show the word gap
        dspWrdArr.push(' ');
        dspWrdArr.push(' ');
      }
      
    } 
  }
  //console.log("dspWrdArr: ", dspWrdArr);
  this.checkForWin(dspWrdArr);
  return (dspWrdArr.join(''));
};

Game.prototype.checkForWin = function (dspWrdArr) {
    //console.log("dspWrdArr: ", dspWrdArr);
    function chkUndrLin (char) {
      return(char!='_');
    }
    if (dspWrdArr.every(chkUndrLin)) {
      this.winFlag = true;
    }
    console.log("dspWrdArr.every(chkUndrLin): (did we win?) ", dspWrdArr.every(chkUndrLin));
    return dspWrdArr.every(chkUndrLin);
}

// 
// show hangman - brute force style with console chars
// 

var hangmanArr = [
  "┌──────────────────┐  ┌────────────────────────────┐",
  "│  ┏╍╍╍╍╍╍╍┓       │  │                            │",
  "│  ╏      ╭┴╮      │  │  THE AMAZING HANGMAN GAME  │",
  "│  ╏      ╰┬╯      │  │                            │",
  "│  ╏       ╋       │  └────────────────────────────┘",
  "│  ╏     / ┃ \\     │  ┌────────────┐  ┌────────────┐",
  "│  ╏    /  ┃  \\    │  │    WINS    │  │   LOSSES   │",
  "│  ╏   O   ┃   O   │  └────────────┘  └────────────┘",
  "│  ╏       ┃       │         ••              ••     ",
  "│  ╏       ╳       │                                ",
  "│  ╏      / \\      │  ┌────────────────────────────┐",
  "│  ╏     /   \\     │  │  Letters Already Guessed   │",
  "│  ╏    /     \\    │  └────────────────────────────┘",
  "│  ╏   ─       ─   │         •••••••••••••••         ",
  "│  ┻               │",
  "└──────────────────┘",
];

var hangmanShadowArr = [
  "┌──────────────────┐  ┌────────────────────────────┐",
  "│  · · · · ·       │  │                            │",
  "│  ·      ···      │  │  THE AMAZING HANGMAN GAME  │",
  "│         ···      │  │                            │",
  "│  ·       ·       │  └────────────────────────────┘",
  "│        · · .     │  ┌────────────┐  ┌────────────┐",
  "│  ·               │  │    WINS    │  │   LOSSES   │",
  "│      ·   ·   ·   │  └────────────┘  └────────────┘",
  "│  ·               │        ",
  "│          ·       │                                ",
  "│  ·               │  ┌────────────────────────────┐",
  "│        ·   ·     │  │  Letters Already Guessed   │",
  "│  ·               │  └────────────────────────────┘",
  "│      ·       ·   │         ",
  "│  ·               │",
  "└──────────────────┘",
];

var shadowRowCpy1 = "│  ·               │        "        
var shadowRowCpy2 = "│      ·       ·   │         "

var hangmanMaskArr = [
  "┌──────────────────┐  ┌────────────────────────────┐",
  "│  011111112       │  │                            │",
  "│  0      333      │  │  THE AMAZING HANGMAN GAME  │",
  "│  0      333      │  │                            │",
  "│  0       4       │  └────────────────────────────┘",
  "│  0     5 4 6     │  ┌────────────┐  ┌────────────┐",
  "│  0    5  4  6    │  │    WINS    │  │   LOSSES   │",
  "│  0   5   4   6   │  └────────────┘  └────────────┘",
  "│  0       4       │        ••              ••      ",
  "│  0       7       │                                ",
  "│  0      7 8      │  ┌────────────────────────────┐",
  "│  0     7   8     │  │  Letters Already Guessed   │",
  "│  0    7     8    │  └────────────────────────────┘",
  "│  0   9       9   │         •••••••••••••••        ",
  "│  0               │",
  "└──────────────────┘",
];

function showHangman(numIncorrect) {

var thisChar = '';
var rowArr = [];

  // update score and letters guessed
  hangmanShadowArr[8] = shadowRowCpy1 + gblWins + "                " + gblLosses;
  hangmanShadowArr[13] = shadowRowCpy2.concat(myGame.invalidGuesses);

  for (var i = 0; i < hangmanArr.length; i++) {
  
    for (var j = 0; j < hangmanArr[i].length; j++) {
      if (parseInt(hangmanMaskArr[i][j], 16)<numIncorrect) {
        thisChar = hangmanArr[i][j];
      } else {
        thisChar = hangmanShadowArr[i][j];
      }
      rowArr.push(thisChar);
    }
    console.log(rowArr.join(''));
    rowArr = [];
  };

};

module.exports = {
  game: Game,
  showHangman: showHangman,
}