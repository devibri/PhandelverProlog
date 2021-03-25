// Create the prolog sesssion and load phandelver.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';
var activeList = "information";
var infoList = [];
var tagList = [];
var output = "";
var output_connections = "";
var character_fields = ["tag", "first_name", "last_name", "occupation", "status", "has_met_party", "faction", "friend_of", "family_of", "knows_info"];
var location_fields = ["location_tag", "location_name", "location_known", "in_region", "char_in_location", "location_visited"];

mermaidAPI.initialize({startOnLoad: false});

function clear_all_lists() {
	let output_area = document.getElementById("output_area");
	output_area.innerHTML = "<div></div>"; 
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
	clear_viz();
	clear_search(); 
	if (activeList == "character") {
		display_character_list();
		display_character_form();
		display_search(); 
	} else if (activeList == "location") {
		display_location_list();
		display_location_form();
		display_search(); 
	} else if (activeList == "information") {
		display_information_list();
		display_search(); 
	} else if (activeList == "visualization") {
		display_visualization(); 
	} else {
		console.log("ERROR: Tried to display non-existant list");
	}
}

function clear_form() {
	var form = document.getElementById("form");
	form.innerHTML = "";
}

function clear_viz() {
	var viz = document.getElementById("graphDiv");
	viz.innerHTML = "";
}

function clear_search() {
	var search = document.getElementById("search-bar");
	search.style.visibility = "hidden"; 
}

function display_search() {
	var search = document.getElementById("search-bar");
	search.style.visibility = "visible"; 
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
	clear_saved_info();
	// For each information in the information tag list, print the information's info 
	get_information_info();
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_information(tagList[i], infoList[i]);
		}
	}, 500);
}

function display_visualization() {
	activeList = "visualization";
	generate_visualization();
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
	var output_area = document.getElementById("output_area");
	check_against_search_filter(character_tag, output, output_area); 
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

// Takes the list of all character info lists, and for each element in the list, outputs it 
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
	var output_area = document.getElementById("output_area");
	check_against_search_filter(location_tag, output, output_area); 
}

// Gets character tags and the list of all the info associated with each character
function get_information_info() {
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_information(bindings[i]);
		}
	}
	bindings = [];
	session.query("info(Info), information_info_list(Info, Info_Info_List).");
	session.answers(get_callback(get_all_bindings));
}

// Callback function for get_information_info, takes each info tag and its info list and puts it into a list
function get_information(binding) {
	if (binding != null) {
		var info_name = binding.lookup("Info"); 
		var info_info_list = binding.lookup("Info_Info_List");
		var list = info_info_list.toJavaScript();
		tagList.push(info_name); 
		infoList.push(list);
	}
}

// Takes the list of all info info lists, and for each element in the list, outputs it 
function print_information(information_tag, information_info_list) {
	output = "";
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < information_info_list.length; i++) {
		session.query("Pred = " + information_info_list[i] + ", findall([Pred, Info], call( Pred, " + information_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	var output_area = document.getElementById("output_area");
	check_against_search_filter(information_tag, output, output_area); 
}

// Adding new entities to the database

// Addds a new character to the world from input 
function add_character() { 
	// Get the values from the form 
	var charTag = get_element("tag");
	var charFirstName = get_element("first_name");
	var charLastName = get_element("last_name");
	var charOccupation = get_element("occupation");
	var charStatus = get_element("status");
	var charHasMetParty = get_element("has_met_party");
	var charFaction = get_element("faction");
	var charFriendOf = get_element("friend_of"); 
	var charFamilyOf = get_element("family_of"); 
	var charKnowsInfo = get_element("knows_info"); 

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_active_list();
		for (var i = 0; i < character_fields.length; i++) {
			clear_form_field(character_fields[i]);
		}
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
	var locTag = get_element("location_tag");
	var locName = get_element("location_name");
	var locKnown = get_element("location_known");
	var locInRegion = get_element("in_region");
	var charInLocation = get_element("char_in_location");
	var locVisited = get_element("location_visited");

	// Update the UI and clear the form 
	var add_to_world = function(bindings) {
		display_active_list();
		for (var i = 0; i < location_fields.length; i++) {
			clear_form_field(location_fields[i]);
		}
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

function clear_form_field(field) {
	document.getElementById(field).value = "";
}

function get_element(id) {
	return document.getElementById(id).value.toString().lowercase();
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
		output_list.innerHTML = output_list.innerHTML + "<div class='output-row'>" + tag + "  -  " + output +  "</div>"; 
	}
}

function generate_visualization() {
	output = "";

	// for each piece of information, find the character associated with that piece of info 
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character_with_info(bindings[i]);
		}
		// Once you get the nodes, get the connections
		get_connections();
	}
	bindings = [];
	session.query("info(Info), knows_info(CharTag, Info), info_desc(Info, InfoDesc).");
	session.answers(get_callback(get_all_bindings));

}

function get_character_with_info(binding) {
	if (binding != null) {
		var info_tag = binding.lookup("Info"); 
		var char_tag = binding.lookup("CharTag");
		var info_desc = binding.lookup("InfoDesc");
		var info_desc_breaks = addBreaks(info_desc); 
		output = output + info_tag + "[\"<p>(" + char_tag + ") " + info_desc_breaks + "</p>\"]\n";
	}
}

function get_connections() {
	output_connections = "";
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_connection(bindings[i]);
		}
		// Once you have the nodes and connections, display the graph
		display_graph();
	}
	bindings = [];
	session.query("info(Info), goes_to_info(Info, InfoNext).");
	session.answers(get_callback(get_all_bindings));
}

function get_connection(binding) {
	if (binding != null) {
		var info_tag = binding.lookup("Info"); 
		var info_next_tag = binding.lookup("InfoNext");
		output_connections = output_connections + info_tag + "-->" + info_next_tag + "\n";
	}
}

function display_graph() {
	var insertSvg = function(svgCode, bindFunctions){
			var viz = document.getElementById("graphDiv");
            viz.innerHTML = svgCode;
            
    };
    var final_output = "graph LR\n" + output + output_connections;   
    var graph = mermaid.mermaidAPI.render('viz_output', final_output, insertSvg);	
}

function addBreaks(str) {
	var desc = str.toString().split(" ");
	var slicedDesc = ""; 
	var i;
	for (i = 0; i < desc.length - 5; i = i + 5) {
		slicedDesc = slicedDesc + desc.slice(i, i+5).join(" ") + "<br />"; 
	}
	slicedDesc = slicedDesc + desc.slice(i).join(" "); 
    return slicedDesc; 
}