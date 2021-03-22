// Create the prolog sesssion and load phandelver.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';
var activeList = "character";
var characterInfoList = [];
var characterTagList = [];
var output = "";

function clear_all_lists() {
	let characters_output = document.getElementById("characters_output");
	characters_output.innerHTML = "<div></div>"; 

	let locations_output = document.getElementById("locations_output");
	locations_output.innerHTML = "<div></div>"; 

	let information_output = document.getElementById("information_output");
	information_output.innerHTML = "<div></div>"; 
}

// On starting up, display list of characters
display_active_list();


// updated from navigation buttons in index.html. Changes the currently visible list 
function set_active_list(value) {
	activeList = value; 
	display_active_list();
}

// checks which list is active and displays that list 
function display_active_list() {
	clear_all_lists();
	if (activeList == "character") {
		display_character_list();
	} else if (activeList == "location") {
		display_location_list();
	} else if (activeList == "information") {
		display_information_list();
	} else {
		console.log("ERROR: Tried to display non-existant list");
	}
}

// handles getting the info for characters and outputting it 
function display_character_list() {
	activeList = "character";
	clear_character_info();
	// For each character in the character tag list, print the character's info 
	get_character_info();
	setTimeout(() => {  
		for (var i = 0; i < characterInfoList.length; i++) {
			print_character(characterTagList[i], characterInfoList[i]);
		}
	}, 200);
}

function display_location_list() {
	activeList = "location";
	print_locations();
}

function display_information_list() {
	activeList = "information";
	print_information();
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

// Removes the current character information so it can be redisplayed
function clear_character_info() {
	characterInfoList = [];
	characterTagList = [];
}

/* Handing character info and output */

// Gets character tags and the list of all the info associated with each character
function get_character_info() {
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character(bindings[i]);
		}
	}
	bindings = [];
	session.query("character(Char), character_info_list(Char, Char_Info_List).");
	session.answers(get_callback(get_all_bindings));
}

// Callback function for get_character_info, takes each character tag and its info and puts it into a list
function get_character(binding) {
	if (binding != null) {
		var char_name = binding.lookup("Char"); 
		var char_info_list = binding.lookup("Char_Info_List");
		var list = char_info_list.toJavaScript();
		characterTagList.push(char_name);
		characterInfoList.push(list);
	}
}

// Takes the list of all character info lists, and for each elementin the list, outputs it 
function print_character(character_tag, character_info_list) {
	output = "";
	var get_all_bindings = function(answer) {
		print_character_info(answer);
	}
	for (var i = 0; i < character_info_list.length; i++) {
		session.query("Pred = " + character_info_list[i] + ", findall([Pred, Info], call( Pred, " + character_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	var characters_output = document.getElementById("characters_output");
	check_against_search_filter(output, characters_output); 
}

// Callback function for print_character, adds each solution to find character info and adds it to the output
function print_character_info(binding) {
	if (binding != null) {
		var list = binding.lookup("List").toJavaScript(); 
		output = output + list + "&emsp;";
	}
}

// Gets a list of all the locations and prints them out
function print_locations() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_location(bindings[i]);
		}
	}
	bindings = [];
	session.query("location_name(Loc, Name).");
	session.answers(get_callback(print_bindings));
}

// outputs a single location if they are found in the search
function print_location(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Name"
		let name = binding.lookup("Name"); 
		let locName = name.toString(); // Turn the Term into a string.
		// Check if the location matches the search
		if (locName.toLowerCase().match(filterString.toLowerCase())) {
			var locations_output = document.getElementById("locations_output");
			locations_output.innerHTML = locations_output.innerHTML + "<div>" + locName +  "</div>"; // Add name to HTML page
		}
	}
}


// Gets a list of all the locations and prints them out
function print_information() {
	var print_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			print_information_piece(bindings[i]);
		}
	}
	bindings = [];
	session.query("info_desc(Info, Desc).");
	session.answers(get_callback(print_bindings));
}

// outputs a single location if they are found in the search
function print_information_piece(binding) {
	if (binding != null) {
		// Look up term that has been bound to variable "Name"
		let desc = binding.lookup("Desc"); 
		let infoDesc = desc.toString(); // Turn the Term into a string.
		// Check if the location matches the search
		if (infoDesc.toLowerCase().match(filterString.toLowerCase())) {
			var information_output = document.getElementById("information_output");
			information_output.innerHTML = information_output.innerHTML + "<div>" + infoDesc +  "</div>"; // Add description to HTML page
		}
	}
}


// Adding new entities to the database

// Addds a new character to the world from input 
function add_character() { 
	// Get the values from the form 
	var tag = document.getElementById("tag").value;
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;

	// Convert the values to strings 
	var charTag = tag.toString().lowercase();
	var charFirstName = first_name.toString().lowercase();
	var charLastName = last_name.toString().lowercase();

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_character_list();
		document.getElementById("tag").value = "";
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
	}
	bindings = [];
	session.query("asserta(character(" + charTag + ")). asserta(first_name(" + charTag + " , " + charFirstName + " ))." + "asserta(last_name(" + charTag + " , " + charLastName + ")).");
	session.answers(get_callback(add_to_world));
}


// Utility functions

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
	display_active_list(); 
}

// Checks if the thing being outputted to list matches the search filter; if so, output it 
function check_against_search_filter(output, output_list) {
	if (output.toLowerCase().match(filterString.toLowerCase())) {
		output_list.innerHTML = output_list.innerHTML + "<div>" + output +  "</div>"; // Add name to HTML page
	}
}
