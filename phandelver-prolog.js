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
	session.query("first_name(Char, FirstName), last_name(Char, LastName).");
	//session.query("last_name(Char, LastName).")
	session.answers(get_callback(print_bindings));
}

// outputs a single character if they are found in the search
function print_character(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Char"
		let firstName = binding.lookup("FirstName"); 
		let charFirstName = firstName.toString(); // Turn the Term into a string.
		let lastName = binding.lookup("LastName"); 
		let charLastName = lastName.toString(); // Turn the Term into a string.
		let charName = charFirstName.capitalize() + " " + charLastName.capitalize(); 
		// Check if the character matches the search
		if (charName.toLowerCase().match(filterString.toLowerCase())) {
			var result = document.getElementById("result");
			result.innerHTML = result.innerHTML + "<div>" + charName +  "</div>"; // Add name to HTML page
		}
	}
}

// Addds a new character to the world from input 
function add_character() { 
	// Get the values from the form 
	let tag = document.getElementById("tag").value;
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;

	// Convert the values to strings 
	let charTag = tag.toString().lowercase();
	let charFirstName = first_name.toString().lowercase();
	let charLastName = last_name.toString().lowercase();

	console.log("adding to world: " + charFirstName + " " + charLastName);
	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		updateUI();
		document.getElementById("tag").value = "";
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
	}
	bindings = [];
	session.query("asserta(character(" + charTag + ")), asserta(first_name(" + charTag + " , " + charFirstName + ")), asserta(last_name(" + charTag + " , " + charLastName + ")).");
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