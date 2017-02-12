var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", 
	"s", "t", "v", "x", "z", "w", "y"];
var singleVowel = ["a", "e", "i", "o", "u", "y"];
var vowels = ["a", "ae", "ai", "ao", "au", "ay", "e", "ea", "ei", "eo", "i", "ia", "ie", 
	"io", "iu", "o", "oa", "ou", "oy", "u", "ua", "ui", "uo", "y", "ya", "yo", "ue"];
var startCombo = ["bh", "bl", "br", "ch", "chr", "cl", "cr", "dh", "dj", "dr", "f", "fl", 
	"fr", "dw", "gh", "gl", "gr", "gw", "kl", "kr", "kw", "lh", "ph", "pl", 
	"pr", "ps", "rh", "sc", "sh", "shr", "sk", "sl", "sm", "sn", "sp", "sr", "st", 
	"sv", "sw", "th", "thr", "str", "spr", "tr", "vl", "wr", "sch"];
var starts = startCombo.concat(consonants);
var endCombo = ["bs", "bt", "ch", "ct", "cs", "ds", "fs", "ft", "gn", "cht", "ks", "kt", "ls", 
	"lt", "ln", "lb", "lc", "lk", "lm", "lv", "mb", "ms", "nc", "nd", "ng", "nk", "nm", "ns", 
	"nt", "ph", "ps", "pt", "rt", "rs", "rp", "rd", "rg", "rk", "st", "th", "ts", "ws"];
var ends = endCombo.concat(consonants);
var random;

function generateName() {
	var newName = "";
	var sections = Math.floor((Math.random() * 4) + 3);
	
	var previous;
	
	var current = 1;
	while (current <= sections) {
		if (current == 1) {
			random = Math.floor((Math.random() * 3) + 1);
			if (random == 1) {
				newName += addVowel();
				previous = "vowel";
			} else {
				random = Math.floor((Math.random() * starts.length));
				newName += starts[random];
				previous = "consonant2";
			}
			current++;
		} else if (current == sections){
			current++;
			random = Math.floor((Math.random() * 5) + 1);
			if (random == 1 && (previous == "vowel" || previous == "consonant")) {
				break;
			} else if (previous == "consonant2") {
				newName += addVowel();
				previous = "vowel";	
			} else {
				random = Math.floor((Math.random() * ends.length));
				newName += ends[random];
			}
		} else {
			if (previous == "vowel") {
				random = Math.floor((Math.random() * consonants.length));
				newName += consonants[random];
				previous = "consonant";
			} else if (previous == "consonant") {
				random = random = Math.floor((Math.random() * 2) + 1);
				if (random == 1) {
					newName += addVowel();
					previous = "vowel";
				} else {
					random = Math.floor((Math.random() * consonants.length));
					newName += consonants[random];
					previous = "consonant2";
				}
				current++;
			} else {
				newName += addVowel();
				previous = "vowel";
				current++;
			}
		}
	}
	
	document.getElementById("name").innerHTML = newName.charAt(0).toUpperCase() + newName.slice(1);
}

function addVowel() {
	random = Math.floor(Math.random() * 4);
	var vowel;
	if (random == 1) {
		random = Math.floor((Math.random() * vowels.length));
		return vowels[random];
	} else {
		random = Math.floor((Math.random() * singleVowel.length));
		return singleVowel[random];
	}
	
}