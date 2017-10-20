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
 "afghanistan", "aland islands", "albania", "algeria", "american samoa", "andorra", "angola", "anguilla", 
 "antarctica", "antigua and barbuda", "argentina", "armenia", "aruba", "australia", "austria", 
 "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", 
 "bermuda", "bhutan", "bolivia", "bonaire", "bosnia and herzegovina", "botswana", "bouvet island", 
 "brazil", "british indian ocean territory", "brunei", "bulgaria", "burkina faso", "burundi", "cambodia", 
 "cameroon", "canada", "cape verde", "cayman islands", "central african republic", "chad", "chile", 
 "china", "christmas island", "cocos islands", "colombia", "comoros", "cook islands", "costa rica", 
 "cote d Ivoire", "countries", "croatia", "cuba", "curacao", "cyprus", "czech republic", 
 "democratic republic of the congo", "denmark", "djibouti", "dominica", "dominican republic", "east timor", 
 "ecuador", "egypt", "el salvador", "england", "equatorial guinea", "eritrea", "estonia", "ethiopia", 
 "european union", "falkland islands", "faroe islands", "fiji", "finland", "france", "french guiana", 
 "french polynesia", "french southern territories", "gabon", "gambia", "georgia", "germany", "ghana", 
 "gibraltar", "greece", "greenland", "grenada", "guadeloupe", "guam", "guatemala", "guernsey", "guinea", 
 "guinea bissau", "guyana", "haiti", "heard island and mcdonald islands", "honduras", "hong kong", 
 "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "isle of man", "israel", "italy", 
 "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "kiribati", "korea north", "korea south", 
 "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", 
 "liechtenstein", "lithuania", "luxembourg", "macao", "macedonia", "madagascar", "malawi", "malaysia", 
 "maldives", "mali", "malta", "marshall islands", "martinique", "mauritania", "mauritius", "mayotte", 
 "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "montserrat", "morocco", 
 "mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "new caledonia", "new zealand", 
 "nicaragua", "niger", "nigeria", "niue", "norfolk island", "northern mariana islands", "norway", "oman", 
 "pakistan", "palau", "palestinian territory", "panama", "papua new guinea", "paraguay", "peru", 
 "philippines", "pitcairn islands", "poland", "portugal", "puerto rico", "qatar", "republic of china", 
 "republic of the congo", "reunion", "romania", "russia", "rwanda", "saint barthelemy", "saint helena", 
 "saint kitts and nevis", "saint lucia", "saint martin", "saint pierre and miquelon", 
 "saint vincent and the grenadines", "samoa", "san marino", "sao tome and principe", "saudi arabia", 
 "scotland", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "sint maarten", "slovakia", 
 "slovenia", "solomon islands", "somalia", "south africa", "south georgia and the south sandwich islands", 
 "south sudan", "spain", "sri lanka", "sudan", "suriname", "svalbard and jan mayen", "swaziland", "sweden", 
 "switzerland", "syria", "tajikistan", "tanzania", "thailand", "togo", "tokelau", "tonga", 
 "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "turks and caicos islands", "tuvalu", "uganda", 
 "kraine", "united arab emirates", "united kingdom", "united states of america", "uruguay", "ussr", 
 "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "virgin islands british", 
 "virgin islands us", "wales", "wallis and futuna", "western sahara", "yemen", "zambia", "zimbabwe", 
];

// Musical Instruments
var wordBank1 = [
"Accordion", "Bagpipes", "Banjo", "Bassoon", "Cello", "Clarinet", "Cymbal", "Double bass", "Drum", 
"Bass drum", "Bongo drum", "Snare drum", "Timpani", "Dulcimer", "Flute", "French horn", "Gong", 
"Guitar", "Electric guitar", "Harp", "Harpsichord", "Hurdy gurdy", "Jaw harp", "Lute", "Lyre", 
"Marimba", "Oboe", "Organ", "Pan pipes", "Pennywhistle", "Piano", "Recorder", "Saxophone", "Sitar", 
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

//console.log("wordBank0[0]", wordBank0[0]);
//console.log("wordBank0.length", wordBank0.length);

//console.log("wordBank1[0]", wordBank1[0]);
//console.log("wordBank1.length", wordBank1.length);

//console.log("wordBank2[0]", wordBank2[0]);
//console.log("wordBank2.length", wordBank2.length);

//console.log("wordBank3[0]", wordBank3[0]);
//console.log("wordBank3.length", wordBank3.length);

//console.log(getRandomWord());


module.exports = {
	word: Word,
	getRandomWord: getRandomWord,
}