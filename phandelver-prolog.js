// Create the prolog sesssion and load mini_prom_week_example.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';

// In starting, render the UI
updateUI();

// Clears the current list of characters then redisplays them
function updateUI() {
	var result = document.getElementById("result");
	result.innerHTML = "<div> </div>"; 
	print_characters();
}


// Functionality for prolog / JS callbacks

/*
 * Returns a callback function to pass to session.answers(). 
 * The parameter is the function for the callback to call (with the bindings as parameter)
 * when prolog has found all the answers. 
*/
function get_callback(funcWhenDone) {
	var callbackFunc = function(answer) {
		if (answer == false) {
			funcWhenDone(bindings);
		}
		else {
			// We've gotten another non-false answer - add it to the bindings.
			bindings.push(answer);
		}
	}

	return callbackFunc;
} 


// Gets a list of all the characters and prints them out
function print_characters() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_character(bindings[i]);
		}
	}
	bindings = [];
	session.query("character(Char).");
	session.answers(get_callback(print_bindings));
}

// outputs a single character if they are found in the search
function print_character(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Char"
		character = binding.lookup("Char"); 
		charName = character.toString().capitalize(); // Turn the Term into a string.
		// Check if the character matches the search
		if (charName.includes(filterString)) {
			var result = document.getElementById("result");
			result.innerHTML = result.innerHTML + "<div>" + charName +  "</div>"; // Add name to HTML page
		}
	}
}

// Addds a new character to the world from input 
function add_character() { 
	var name = document.getElementById("name").value;
	name = name != "" ? name : "Y";
	var charName = name.toString().lowercase();
	var add_to_world = function(bindings) {
		updateUI();
		document.getElementById("name").value = "";
	}
	bindings = [];
	session.query("asserta(character(" + charName + ")).");
	session.answers(get_callback(add_to_world));
}

// Add method to the String prototype to capitalize the first letter of the String.
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Add method to the String prototype to capitalize the first letter of the String.
String.prototype.lowercase = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

// Updates the term being searched for when user hits search button
function update_filter_string() {
	var search_term = document.getElementById("search").value;
	filterString = search_term.toString();
	updateUI();
}