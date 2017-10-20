console.log('letter file is loaded');

var Letter = function (letter) {
	this.letter = letter;
}

Letter.prototype.display = function () {
	// only show it if they guessed it
	console.log(this.letter);
}

module.exports = {
	letter: Letter,
}