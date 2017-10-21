console.log('word file is loaded');

var Word = function (word) {
	this.word = word;
};

Word.prototype.display = function () {
	console.log(this.word);
};

function getRandomWord (bank=0) {
	switch(bank) {
	    case 0:
	        return (wordBank0[getRandomNumber(0, wordBank0.length)]);
	        break;
	    case 1:
	        return (wordBank1[getRandomNumber(0, wordBank1.length)]);
	        break;
		case 2:
	        return (wordBank2[getRandomNumber(0, wordBank2.length)]);
	        break;
	    case 3:
	        return (wordBank3[getRandomNumber(0, wordBank3.length)]);
	        break;
	    default:
	        console.log("Error: Bad word bank number");
	        break;
	}
};

// Get random number between max and min
function getRandomNumber (min, max) {
    return Math.floor((Math.random() * (max - min + 1) ) + min);
};

// Country Names
var wordBank0 = [
 "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", 
 "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", 
 "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
 "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia And Herzegovina", "Botswana", "Bouvet Island", 
 "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", 
 "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", 
 "China", "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Cook Islands", "Costa Rica", 
 "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", 
 "Democratic Republic Of The Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", 
 "Ecuador", "Egypt", "El Salvador", "England", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", 
 "European Union", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", 
 "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
 "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", 
 "Guinea Bissau", "Guyana", "Haiti", "Heard Island And Mcdonald Islands", "Honduras", "Hong Kong", 
 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", 
 "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", 
 "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
 "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", 
 "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", 
 "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", 
 "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", 
 "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", 
 "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
 "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic Of China", 
 "Republic Of The Congo", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena", 
 "Saint Kitts And Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre And Miquelon", 
 "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", 
 "Scotland", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", 
 "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia And The South Sandwich Islands", 
 "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen", "Swaziland", "Sweden", 
 "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", 
 "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", 
 "Kraine", "United Arab Emirates", "United Kingdom", "United States Of America", "Uruguay", "USSR", 
 "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands British", 
 "Virgin Islands Us", "Wales", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", 
];

// Musical Instruments
var wordBank1 = [
"Accordion", "Bagpipes", "Banjo", "Bassoon", "Cello", "Clarinet", "Cymbal", "Double Bass", "Drum", 
"Bass Drum", "Bongo Drum", "Snare Drum", "Timpani", "Dulcimer", "Flute", "French Horn", "Gong", 
"Guitar", "Electric Guitar", "Harp", "Harpsichord", "Hurdy Gurdy", "Jaw Harp", "Lute", "Lyre", 
"Marimba", "Oboe", "Organ", "Pan Pipes", "Pennywhistle", "Piano", "Recorder", "Saxophone", "Sitar", 
"Synthesizer", "Tambourine", "Triangle", "Trombone", "Trumpet", "Tuba", "Viola", "Violin", "Fiddle", 
"Xylophone", "Zither",
];

// Animals
var wordBank2 = [
 "Aardvark", "Abyssinian", "Adelie", "Penguin", "Affenpinscher", "Afghan Hound", "African Bush Elephant", 
 "African Civet", "African Clawed Frog", "African Forest Elephant", "African Palm Civet", "African Penguin", 
 "African Tree Toad",  "African Wild Dog", "Ainu Dog", "Airedale Terrier", "Akbash", "Akita", "Alaskan Malamute", 
 "Albatross", "Aldabra Giant Tortoise",  "Alligator", "Alpine Dachsbracke", "American Bulldog", "American Cocker Spaniel", 
 "American Coonhound", "American Eskimo Dog",  "American Foxhound", "American Pit Bull Terrier", 
 "American Staffordshire Terrier", "American Water Spaniel",  "Anatolian Shepherd Dog", "Angelfish", "Ant", 
 "Anteater", "Antelope", "Appenzeller Dog", "Arctic Fox", "Arctic Hare", "Arctic Wolf",  "Armadillo", "Asian Elephant", 
 "Asian Giant Hornet", "Asian Palm Civet", "Asiatic Black Bear", "Australian Cattle Dog",  "Australian Kelpie Dog", 
 "Australian Mist", "Australian Shepherd", "Australian Terrier", "Avocet", "Axolotl", "Aye Aye", "Baboon",  
 "Bactrian Camel", "Badger", "Balinese", "Banded Palm Civet", "Bandicoot", "Barb", "Barn Owl", "Barnacle", 
 "Barracuda", "Basenji Dog",  "Basking Shark", "Basset Hound", "Bat", "Bavarian Mountain Hound", "Beagle", "Bear", 
 "Bearded Collie", "Bearded Dragon", "Beaver",  "Bedlington Terrier", "Beetle", "Bengal Tiger", "Bernese Mountain Dog", 
 "Bichon Frise", "Binturong", "Bird", "Birds Of Paradise",  "Birman", "Bison", "Black Bear", "Black Rhinoceros", 
 "Black Russian Terrier", "Black Widow Spider", "Bloodhound", "Blue Lacy Dog",  "Blue Whale", "Bluetick Coonhound", 
 "Bobcat", "Bolognese Dog", "Bombay", "Bongo", "Bonobo", "Booby", "Border Collie", "Border Terrier",  
 "Bornean Orangutan", "Borneo Elephant", "Boston Terrier", "Bottle Nosed Dolphin", "Boxer Dog", "Boykin Spaniel", 
 "Brazilian Terrier", "Brown Bear", "Budgerigar", "Buffalo", "Bull Mastiff", "Bull Shark", "Bull Terrier", "Bulldog", 
 "Bullfrog", "Bumble Bee", "Burmese", "Burrowing Frog", "Butterfly", "Butterfly Fish", "Caiman", "Caiman Lizard", 
 "Cairn Terrier", "Camel",  "Canaan Dog", "Capybara", "Caracal", "Carolina Dog", "Cassowary", "Cat", "Caterpillar", 
 "Catfish", "Cavalier King Charles Spaniel", "entipede", "Cesky Fousek", "Chameleon", "Chamois", "Cheetah", 
 "Chesapeake Bay Retriever", "Chicken", "Chihuahua", "Chimpanzee",  "Chinchilla", "Chinese Crested Dog", "Chinook", 
 "Chinstrap Penguin", "Chipmunk", "Chow Chow", "Cichlid", "Clouded Leopard",  "Clown Fish", "Clumber Spaniel", 
 "Coati", "Cockroach", "Collared Peccary", "Collie", "Common Buzzard", "Common Frog", "Common Loon",  "Common Toad", 
 "Coral", "Cottontop Tamarin", "Cougar", "Cow", "Coyote", "Crab", "Crab"- "Eating Macaque", "Crane", "Crested Penguin", 
 "Crocodile", "Cross River Gorilla", "Curly Coated Retriever", "Cuscus", "Cuttlefish", "Dachshund", "Dalmatian", 
 "Darwins Frog",  "Deer", "Desert Tortoise", "Deutsche Bracke", "Dhole", "Dingo", "Discus", "Doberman Pinscher", 
 "Dodo", "Dog", "Dogo Argentino",  "Dogue De Bordeaux", "Dolphin", "Donkey", "Dormouse", "Dragonfly", "Drever", 
 "Duck", "Dugong", "Dunker", "Dusky Dolphin",  "Dwarf Crocodile", "Eagle", "Earwig", "Eastern Gorilla", 
 "Eastern Lowland Gorilla", "Echidna", "Edible Frog", "Egyptian Mau",  "Electric Eel", "Elephant", "Elephant Seal", 
 "Elephant Shrew", "Emperor Penguin", "Emperor Tamarin", "Emu",  "English Cocker Spaniel", "English Shepherd", 
 "English Springer Spaniel", "Entlebucher Mountain Dog",  "Epagneul Pont Audemer", "Eskimo Dog", "Estrela Mountain Dog", 
 "Falcon", "Fennec Fox", "Ferret", "Field Spaniel", "Fin Whale", "Finnish Spitz", "Fire-Bellied Toad", "Fish", 
 "Fishing Cat", "Flamingo", "Flat Coat Retriever", "Flounder", "Fly", "Flying Squirrel", "Fossa", "Fox", 
 "Fox Terrier", "French Bulldog", "Frigatebird", "Frilled Lizard", "Frog", "Fur Seal", "Galapagos Penguin", 
 "Galapagos Tortoise", "Gar", "Gecko", "Gentoo Penguin", "Geoffroys Tamarin", "Gerbil", "German Pinscher", 
 "German Shepherd", "Gharial", "Giant African Land Snail", "Giant Clam", "Giant Panda Bear", "Giant Schnauzer", 
 "Gibbon", "Gila Monster", "Giraffe", "Glass Lizard", "Glow Worm", "Goat", "Golden Lion Tamarin", "Golden Oriole", 
 "Golden Retriever", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great Dane", "Great White Shark", 
 "Greater Swiss Mountain Dog", "Green Bee-Eater", "Greenland Dog", "Grey Mouse Lemur", "Grey Reef Shark", "Grey Seal", 
 "Greyhound", "Grizzly Bear", "Grouse", "Guinea Fowl", "Guinea Pig", "Guppy", "Hammerhead Shark", "Hamster", "Hare", 
 "Harrier", "Havanese", "Hedgehog", "Hercules Beetle", "Hermit Crab", "Heron", "Highland Cattle", 
 "Himalayan", "Hippopotamus", "Honey Bee", "Horn Shark", "Horned Frog", "Horse", "Horseshoe Crab", "Howler Monkey", 
 "Human", "Humboldt Penguin", "Hummingbird", "Humpback Whale", "Hyena", "Ibis", "Ibizan Hound", "Iguana", "Impala", 
 "Indian Elephant", "Indian Palm Squirrel", "Indian Rhinoceros", "Indian Star Tortoise", "Indochinese Tiger", "Indri", 
 "Insect", "Irish Setter",  "Irish WolfHound", "Jack Russel", "Jackal", "Jaguar", "Japanese Chin", "Japanese Macaque", 
 "Javan Rhinoceros", "Javanese", "Jellyfish", "Kakapo", "Kangaroo", "Keel Billed Toucan", "Killer Whale", "King Crab", 
 "King Penguin", "Kingfisher", "Kiwi", "Koala", "Komodo Dragon", "Kudu", "Labradoodle", "Labrador Retriever", 
 "Ladybird", "Leaf-Tailed Gecko", "Lemming", "Lemur", "Leopard", "Leopard Cat", "Leopard Seal", "Leopard Tortoise", 
 "Liger", "Lion", "Lionfish", "Little Penguin", "Lizard", "Llama", "Lobster", "Long-Eared Owl", "Lynx", 
 "Macaroni Penguin", "Macaw", "Magellanic Penguin", "Magpie", "Maine Coon", "Malayan Civet", "Malayan Tiger", 
 "Maltese", "Manatee", "Mandrill", "Manta Ray", "Marine Toad", "Markhor", "Marsh Frog", "Masked Palm Civet", 
 "Mastiff", "Mayfly", "Meerkat", "Millipede", "Minke Whale", "Mole", "Molly", "Mongoose", "Mongrel", "Monitor Lizard", 
 "Monkey", "Monte Iberia Eleuth", "Moorhen", "Moose", "Moray Eel", "Moth", "Mountain Gorilla", "Mountain Lion", 
 "Mouse", "Mule", "Neanderthal", "Neapolitan Mastiff", "Newfoundland", "Newt", "Nightingale", "Norfolk Terrier", 
 "Norwegian Forest", "Numbat", "Nurse Shark", "Ocelot", "Octopus", "Okapi", "Old English Sheepdog", "Olm", "Opossum", 
 "Orang-utan", "Ostrich", "Otter", "Oyster", "Pademelon", "Panther", "Parrot", "Patas Monkey", "Peacock", "Pekingese", 
 "Pelican", "Penguin", "Persian", "Pheasant", "Pied Tamarin", "Pig", "Pika", "Pike", "Pink Fairy Armadillo", 
 "Piranha", "Platypus", "Pointer", "Poison Dart Frog", "Polar Bear", "Pond Skater", "Poodle", "Pool Frog", 
 "Porcupine", "Possum", "Prawn", "Proboscis Monkey", "Puffer Fish", "Puffin", "Pug", "Puma", "Purple Emperor", 
 "Puss Moth", "Pygmy Hippopotamus", "Pygmy Marmoset", "Quail", "Quetzal", "Quokka", "Quoll", "Rabbit", "Raccoon", 
 "Raccoon Dog", "Radiated Tortoise", "Ragdoll", "Rat", "Rattlesnake", "Red Knee Tarantula", "Red Panda", "Red Wolf", 
 "Red-handed Tamarin", "Reindeer", "Rhinoceros", "River Dolphin", "River Turtle", "Robin", "Rock Hyrax", 
 "Rockhopper Penguin", "Roseate Spoonbill", "Rottweiler", "Royal Penguin", "Russian Blue", "Sabre-Toothed Tiger", 
 "Saint Bernard", "Salamander", "Sand Lizard", "Saola", "Scorpion", "Scorpion Fish", "Sea Dragon", "Sea Lion", 
 "Sea Otter", "Sea Slug", "Sea Squirt", "Sea Turtle", "Sea Urchin", "Seahorse", "Seal", "Serval", "Sheep", "Shih Tzu", 
 "Shrimp", "Siamese", "Siamese Fighting Fish", "Siberian", "Siberian Husky", "Siberian Tiger", "Silver Dollar", 
 "Skunk", "Sloth", "Slow Worm", "Snail", "Snake", "Snapping Turtle", "Snowshoe", "Snowy Owl", "Somali", 
 "South China Tiger", "Spadefoot Toad", "Sparrow", "Spectacled Bear", "Sperm Whale", "Spider Monkey", "Spiny Dogfish", 
 "Sponge", "Squid", "Squirrel", "Squirrel Monkey", "Sri Lankan Elephant", "Staffordshire Bull Terrier", "Stag Beetle", 
 "Starfish", "Stellers Sea Cow", "Stick Insect", "Stingray", "Stoat", "Striped Rocket Frog", 
 "Sumatran Elephant", "Sumatran Orang-utan", "Sumatran Rhinoceros", "Sumatran Tiger", "Sun Bear", "Swan", "Tang", 
 "Tapir", "Tarsier", "Tasmanian Devil", "Tawny Owl", "Termite", "Tetra", "Thorny Devil", "Tibetan Mastiff", "Tiffany", 
 "Tiger", "Tiger Salamander", "Tiger Shark", "Tortoise", "Toucan", "Tree Frog", "Tropicbird", "Tuatara", "Turkey", 
 "Turkish Angora", "Uakari", "Uguisu", "Umbrellabird", "Vampire Bat", "Vervet Monkey", "Vulture", "Wallaby", "Walrus", 
 "Warthog", "Wasp", "Water Buffalo", "Water Dragon", "Water Vole", "Weasel", "Welsh Corgi", "West Highland Terrier", 
 "Western Gorilla", "Western Lowland Gorilla", "Whale Shark", "Whippet", "White Faced Capuchin", "White Rhinoceros", 
 "White Tiger", "Wild Boar", "Wildebeest", "Wolf", "Wolverine", "Wombat", "Woodlouse", "Woodpecker", "Woolly Mammoth", 
 "Woolly Monkey", "Wrasse", "XRay Tetra", "Yak", "Yellow Eyed Penguin", "Yorkshire Terrier", "Zebra", "Zebra Shark", 
 "Zebu", "Zonkey", "Zorse",
];

// World Cities
var wordBank3 = [
"New York", "Sao Paulo", "Seoul", "Incheon", "Mexico City", "Osaka", "Kobe", "Kyoto", "Manila", "Mumbai", 
"Delhi", "Jakarta", "Lagos", "Kolkata", "Cairo", "Los Angeles", "Buenos Aires", "Rio de Janeiro", 
"Moscow", "Shanghai", "Karachi", "Paris", "Istanbul", "Nagoya", "Beijing", "Chicago", "London", 
"Shenzhen", "Essen", "Düsseldorf", "Tehran", "Bogota", "Lima", "Bangkok", "Johannesburg", "East Rand", 
"Chennai", "Taipei", "Baghdad", "Santiago", "Bangalore", "Hyderabad", "St Petersburg", "Philadelphia", 
"Lahore", "Kinshasa", "Miami", "Ho Chi Minh City", "Madrid", "Tianjin", 
"Kuala Lumpur", "Toronto", "Milan", "Shenyang", "Dallas", "Fort Worth", "Boston", "Belo Horizonte",
"Khartoum", "Riyadh", "Singapore", "Washington", "Detroit", "Barcelona", "Houston", "Athens", "Berlin", 
"Sydney", "Atlanta", "Guadalajara", "San Francisco", "Oakland", "Montreal", "Monterey", "Melbourne", 
"Ankara", "Recife", "Phoenix", "Mesa", "Durban", "Porto Alegre", "Dalian", "Jeddah", "Seattle", 
"Cape Town", "San Diego", "Fortaleza", "Curitiba", "Rome", "Naples", "Minneapolis", "St. Paul", "Tel Aviv", "Birmingham", 
"Frankfurt", "Lisbon", "Manchester", "San Juan", "Katowice", "Tashkent", "Fukuoka", "Baku", "Sumqayit", "St. Louis", 
"Baltimore", "Sapporo", "Tampa", "St. Petersburg", "Taichung", "Warsaw", "Denver", "Cologne", "Bonn", "Hamburg", "Dubai", 
"Pretoria", "Vancouver", "Beirut", "Budapest", "Cleveland", "Pittsburgh", "Campinas", "Harare", "Brasilia", "Kuwait", 
"Munich", "Portland", "Brussels", "Vienna", "San Jose", "Damman", "Copenhagen", "Brisbane", "Riverside", "San Bernardino", 
"Cincinnati", "Accra", "Tokyo", "Yokohama",
];

module.exports = {
	word: Word,
	getRandomWord: getRandomWord,
}