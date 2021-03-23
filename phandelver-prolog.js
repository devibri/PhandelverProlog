// Create the prolog sesssion and load phandelver.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';
var activeList = "location";
var infoList = [];
var tagList = [];
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
	clear_form(); 
	if (activeList == "character") {
		display_character_list();
		display_character_form();
	} else if (activeList == "location") {
		display_location_list();
		display_location_form();
	} else if (activeList == "information") {
		display_information_list();
	} else if (activeList == "visualization") {
		// for now, do nothing
	} else {
		console.log("ERROR: Tried to display non-existant list");
	}
}

function clear_form() {
	var form = document.getElementById("form");
	form.innerHTML = "<div></div>";
}

function display_character_form() {
	var character_form = document.getElementById("form");
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="tag" value="" placeholder="Enter tag" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="first_name" value="" placeholder="Enter first name" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="last_name" value="" placeholder="Enter last name" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="occupation" value="" placeholder="Enter occupation" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="status" value="" placeholder="Enter status (ex. alive)" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="has_met_party" value="" placeholder="Has met party (ex. true)" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="faction" value="" placeholder="Enter faction" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="friend_of" value="" placeholder="Friend of (enter tag)" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="family_of" value="" placeholder="Family of (enter tag)" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="textinput" type="text" id="knows_info" value="" placeholder="Knows info (enter tag)" /></div>';
	character_form.innerHTML = character_form.innerHTML + '<div><input class="button" type="button" value="Add character" id="button" onClick="add_character();" /></div>';
}

function display_location_form() {
	var location_form = document.getElementById("form");
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="location_tag" value="" placeholder="Enter tag" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="location_name" value="" placeholder="Enter location name" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="location_known" value="" placeholder="Party knows about location (ex. true)" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="in_region" value="" placeholder="Enter region" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="char_in_location" value="" placeholder="Enter characters in location" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="textinput" type="text" id="location_visited" value="" placeholder="Party has visited location (ex. true)" /></div>';
	location_form.innerHTML = location_form.innerHTML + '<div><input class="button" type="button" value="Add location" id="button" onClick="add_location();" /></div>';
}

// handles getting the info for characters and outputting it 
function display_character_list() {
	activeList = "character";
	clear_saved_info();
	// For each character in the character tag list, print the character's info 
	get_character_info();
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_character(tagList[i], infoList[i]);
		}
	}, 500);
}

function display_location_list() {
	activeList = "location";
	clear_saved_info();
	// For each location in the location tag list, print the location's info 
	get_location_info();
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_location(tagList[i], infoList[i]);
		}
	}, 500);
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

// Removes the current information so it can be redisplayed
function clear_saved_info() {
	infoList = [];
	tagList = [];
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
		tagList.push(char_name);
		infoList.push(list);
	}
}

// Takes the list of all character info lists, and for each elementin the list, outputs it 
function print_character(character_tag, character_info_list) {
	output = "";
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < character_info_list.length; i++) {
		session.query("Pred = " + character_info_list[i] + ", findall([Pred, Info], call( Pred, " + character_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	var characters_output = document.getElementById("characters_output");
	check_against_search_filter(character_tag, output, characters_output); 
}

// Callback function that takes a list and outputs it 
function print_list_info(binding) {
	if (binding != null) {
		var list = binding.lookup("List").toJavaScript(); 
		output = output + list + "&emsp;";
	}
}

// Gets character tags and the list of all the info associated with each character
function get_location_info() {
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_location(bindings[i]);
		}
	}
	bindings = [];
	session.query("location(Loc), location_info_list(Loc, Loc_Info_List).");
	session.answers(get_callback(get_all_bindings));
}

// Callback function for get_character_info, takes each character tag and its info and puts it into a list
function get_location(binding) {
	if (binding != null) {
		var loc_name = binding.lookup("Loc"); 
		var loc_info_list = binding.lookup("Loc_Info_List");
		var list = loc_info_list.toJavaScript();
		tagList.push(loc_name); 
		infoList.push(list);
	}
}

// Takes the list of all character info lists, and for each elementin the list, outputs it 
function print_location(location_tag, location_info_list) {
	output = "";
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < location_info_list.length; i++) {
		session.query("Pred = " + location_info_list[i] + ", findall([Pred, Info], call( Pred, " + location_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	var locations_output = document.getElementById("locations_output");
	check_against_search_filter(location_tag, output, locations_output); 
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
	var charTag = document.getElementById("tag").value.toString().lowercase();
	var charFirstName = document.getElementById("first_name").value.toString().lowercase();
	var charLastName = document.getElementById("last_name").value.toString().lowercase();
	var charOccupation = document.getElementById("occupation").value.toString().lowercase();
	var charStatus = document.getElementById("status").value.toString().lowercase();
	var charHasMetParty = document.getElementById("has_met_party").value.toString().lowercase();
	var charFaction = document.getElementById("faction").value.toString().lowercase();
	var charFriendOf = document.getElementById("friend_of").value.toString().lowercase();
	var charFamilyOf = document.getElementById("family_of").value.toString().lowercase();
	var charKnowsInfo = document.getElementById("knows_info").value.toString().lowercase();

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_active_list();
		document.getElementById("tag").value = "";
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
		document.getElementById("occupation").value = "";
		document.getElementById("status").value = "";
		document.getElementById("has_met_party").value = "";
		document.getElementById("faction").value = "";
		document.getElementById("friend_of").value = "";
		document.getElementById("family_of").value = "";
		document.getElementById("knows_info").value = "";
	}
	bindings = [];
	session.query(
		"asserta(character(" + charTag + "))." + 
		"asserta(first_name(" + charTag + " , " + charFirstName + " ))." + 
		"asserta(last_name(" + charTag + " , " + charLastName + "))." + 
		"asserta(occupation(" + charTag + " , " + charOccupation + "))." + 
		"asserta(status(" + charTag + " , " + charStatus + "))." + 
		"asserta(has_met_party(" + charTag + " , " + charHasMetParty + "))." + 
		"asserta(faction(" + charTag + " , " + charFaction + "))." + 
		"asserta(friend_of(" + charTag + " , " + charFriendOf + "))." + 
		"asserta(family_of(" + charTag + " , " + charFamilyOf + "))." + 
		"asserta(knows_info(" + charTag + " , " + charKnowsInfo + "))." + 
		"asserta(character_info_list(" + charTag + ", [first_name, last_name, occupation, status, has_met_party, faction, friend_of, family_of, knows_info])).");
	session.answers(get_callback(add_to_world));
}

// Addds a new location to the world from input 
function add_location() { 
	// Get the values from the form 
	var locTag = document.getElementById("location_tag").value.toString().lowercase();
	var locName = document.getElementById("location_name").value.toString().lowercase();
	var locKnown = document.getElementById("location_known").value.toString().lowercase();
	var locInRegion = document.getElementById("in_region").value.toString().lowercase();
	var charInLocation = document.getElementById("char_in_location").value.toString().lowercase();
	var locVisited = document.getElementById("location_visited").value.toString().lowercase();

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_active_list();
		document.getElementById("location_tag").value = "";
		document.getElementById("location_name").value = "";
		document.getElementById("location_known").value = "";
		document.getElementById("in_region").value = "";
		document.getElementById("char_in_location").value = "";
		document.getElementById("location_visited").value = "";
	}
	bindings = [];
	session.query(
		"asserta(location(" + locTag + "))." + 
		"asserta(location_name(" + locTag + " , " + locName + " ))." + 
		"asserta(location_known(" + locTag + " , " + locKnown + "))." + 
		"asserta(in_region(" + locTag + " , " + locInRegion + "))." + 
		"asserta(char_in_location(" + locTag + " , " + charInLocation + "))." + 
		"asserta(location_visited(" + locTag + " , " + locVisited + "))." + 
		"asserta(location_info_list(" + locTag + ", [location_name, location_known, in_region, char_in_location, location_visited])).");
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
function check_against_search_filter(tag, output, output_list) {
	if (output.toLowerCase().match(filterString.toLowerCase())) {
		output_list.innerHTML = output_list.innerHTML + "<div class='output-row'>" + tag + "  -  " + output +  "</div>"; // Add name to HTML page
	}
}
