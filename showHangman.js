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
	"│  ·               │        ••              ••      ",
	"│          ·       │                                ",
	"│  ·               │  ┌────────────────────────────┐",
	"│        ·   ·     │  │  Letters Already Guessed   │",
	"│  ·               │  └────────────────────────────┘",
	"│      ·       ·   │         •••••••••••••••        ",
	"│  ·               │",
	"└──────────────────┘",
];

var hangmanMaskArr = [
	"┌──────────────────┐  ┌────────────────────────────┐",
	"│  011111112       │  │                            │",
	"│  0      333      │  │  THE AMAZING HANGMAN GAME  │",
	"│  0      333      │  │                            │",
	"│  0       4       │  └────────────────────────────┘",
	"│  0     5 4 6     │  ┌────────────┐  ┌────────────┐",
	"│  0    5  4  6    │  │    WINS    │  │   LOSSES   │",
	"│  0   7   4   8   │  └────────────┘  └────────────┘",
	"│  0       4       │        ••              ••      ",
	"│  0       9       │                                ",
	"│  0      9 A      │  ┌────────────────────────────┐",
	"│  0     9   A     │  │  Letters Already Guessed   │",
	"│  0    9     A    │  └────────────────────────────┘",
	"│  0   B       C   │         •••••••••••••••        ",
	"│  0               │",
	"└──────────────────┘",
];

var thisChar = 'x';
var numIncorrect = 13;
var rowArr = [];

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

//console.log("\x1b[0m"); 	// reset
console.log('\x1b[0m_ _ _ _ w   _ h _   _ o o _ _ _ _');
//console.log("\x1b[31m");	// red
console.log();
console.log('_ _ guesses remaining');
//console.log("\x1b[1m"); 	// bright
//console.log("\x1b[32m");	// green
console.log();
//console.log('\x1b[1m\x1b[32mCORRECT!\x1b[0m');
console.log('\x1b[1m\x1b[31mINCORRECT!\x1b[0m');
//console.log("\x1b[0m");		// reset
console.log('Guess a letter! _ ');


