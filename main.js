// Create the prolog sesssion and load phandelver.prolog.
session = pl.create();
session.consult("database.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
var filterString = '';
var activeList = "conditional";
var infoList = [];
var tagList = [];
var questList = [];
var conditionalList = [];
var output = "";
var final_output = "";
var output_connections = "";
var character_fields = ["tag", "first_name", "last_name", "occupation", "status", "has_met_party", "faction", "friend_of", "family_of", "knows_info", "has_quest", "has_conditional"];
var location_fields = ["location_tag", "location_name", "location_known", "in_region", "char_in_location", "location_visited"];
var information_fields = ["information_tag", "info_desc", "info_known", "info_acted_on", "storyline", "goes_to_location", "goes_to_info"];
var quest_fields = ["quest_tag", "quest_desc", "storyline", "quest_known", "quest_complete", "goes_to_location", "goes_to_info"];
var conditional_fields = ["conditional_tag", "conditional_desc", "storyline", "conditional_complete", "goes_to_location", "goes_to_info"];
var output_elements = [];

var output_area = document.getElementById("output_area");
var key_area = document.getElementById("key");
var row = null;

// variables for the forms
var tag, first_name, last_name, occupation, status, has_met_party, faction, friend_of, family_of, knows_info, has_quest, has_conditional;
var location_tag, location_name, location_known, in_region, char_in_location, location_visited; 
var information_tag, info_desc, info_known, info_acted_on, storyline, goes_to_location, goes_to_info; 
var quest_tag, quest_desc, storyline, quest_known, quest_complete, goes_to_location, goes_to_info; 
var conditional_tag, conditional_desc, storyline, conditional_complete, goes_to_location, goes_to_info;

mermaidAPI.initialize({startOnLoad: false});

function clear_all_lists() {
	output_area.innerHTML = ""; 
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
	clear_key();
	clear_search_input();
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
		display_information_form();
		display_search(); 
	} else if (activeList == "quest") {
		display_quest_list();
		display_quest_form();
		display_search(); 
	} else if (activeList == "conditional") {
		display_conditional_list();
		display_conditional_form();
		display_search(); 
	} else if (activeList == "visualization") {
		display_visualization(); 
	} else {
		console.log("ERROR: Tried to display non-existent list");
	}
}

function clear_form() {
	let form = document.getElementById("myForm");
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

function clear_key() {
	key.innerHTML = ""; 
}

function clear_search_input() {
	var search = document.getElementById("search");
	search.value = "";
}

function display_search() {
	var search = document.getElementById("search-bar");
	search.style.visibility = "visible"; 
}

// handles getting the info for characters and outputting it 
function display_character_list() {
	activeList = "character";
	clear_saved_info();
	// For each character in the character tag list, print the character's info 
	get_character_info();
	final_output = "<thead><h1>Characters</h1><table id='list-table' class='table'><tr><th>Tag</th><th>First Name</th><th>Last Name</th><th>Occupation</th><th>Status</th><th>Has Met Party</th><th>Faction</th><th>Friend Of</th><th>Family Of</th><th>Knows Info</th><th>Has Quest</th><th>Has Conditional</th><th>Edit</th><th>Delete</th></tr></thead><tbody>";
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_character(tagList[i], infoList[i]);
		}
		output_area.innerHTML = final_output + "</tbody></table>";
	}, 500);
}

function display_location_list() {
	activeList = "location";
	clear_saved_info();
	// For each location in the location tag list, print the location's info 
	get_location_info();
	final_output = "<thead><h1>Locations</h1><table id='list-table' class='table'><tr><th>Tag</th><th>Name</th><th>Known by Party</th><th>In Region</th><th>Characters Here</th><th>Visited by Party</th><th>Edit</th><th>Delete</th></tr></thead><tbody>";
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_location(tagList[i], infoList[i]);
		}
		output_area.innerHTML = final_output + "</tbody></table>";
	}, 500);
}

function display_information_list() {
	activeList = "information";
	clear_saved_info();
	// For each information in the information tag list, print the information's info 
	get_information_info();
	final_output = "<thead><h1>Character Knowledge</h1><table id='list-table' class='table'><tr><th>Tag</th><th>Description</th><th>Known by Party</th><th>Acted On</th><th>Storyline</th><th>Goes to Location</th><th>Goes to Information</th><th>Edit</th><th>Delete</th></tr></thead><tbody>";
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_information(tagList[i], infoList[i]);
		}
		output_area.innerHTML = final_output + "</tbody></table>";
	}, 500);
}

function display_quest_list() {
	activeList = "quest";
	clear_saved_info();
	// For each information in the quest tag list, print the quest's info 
	get_quest_info();
	final_output = "<thead><h1>Quests</h1><table id='list-table' class='table'><tr><th>Tag</th><th>Description</th><th>Storyline</th><th>Known by Party</th><th>Complete</th><th>Goes To Location</th><th>Goes to Information</th><th>Edit</th><th>Delete</th></tr></thead><tbody>";
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_quest(tagList[i], infoList[i]);
		}
		output_area.innerHTML = final_output + "</tbody></table>";
	}, 500);
}

function display_conditional_list() {
	activeList = "conditional";
	clear_saved_info();
	// For each information in the quest tag list, print the quest's info 
	get_conditional_info();
	final_output = "<thead><h1>Conditionals</h1><table id='list-table' class='table'><tr><th>Tag</th><th>Description</th><th>Storyline</th></th><th>Complete</th><th>Goes To Location</th><th>Goes to Information</th><th>Edit</th><th>Delete</th></tr></thead><tbody>";
	setTimeout(() => {  
		for (var i = 0; i < infoList.length; i++) {
			print_conditional(tagList[i], infoList[i]);
		}
		output_area.innerHTML = final_output + "</tbody></table>";
	}, 500);
}

function display_visualization() {
	activeList = "visualization";
	let key_text = 'Key: <span style="background-color: #FFA78E">Quest</span>  |  <span style="background-color: #F6DD8B">Conditional</span>  |  <span style="background-color: #BCD6BB">Information</span>  |  <span style="background-color: #CDCDCD">Location</span>';
	key.innerHTML = key_text;
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

// Adds the relevant list to a list of all its elements 
function print_list_info(binding) {
	if (binding != null) {
		var list = binding.lookup("List").toJavaScript(); 
		var values = list.toString().split(','); 
		while (values.length > 0) {
			output_elements.push(values.shift());
		}
	}
}

// add the info if it matches search to the table
function add_to_table(tag, fields_list) {
	var all_info = ""; 
	for (var i = 1; i < output_elements.length; i+=2) {
		all_info = all_info + output_elements[i] + " ";
	}

	// Check if the character matches the current search
	if (all_info.toLowerCase().match(filterString.toLowerCase())) {
		final_output = final_output + "<tr><td>" + tag + "</td>";
		// Go through each of the character's pieces of info and add them to the table 
		for (var i = 1; i < fields_list.length; i++) {
			if (output_elements[0] == fields_list[i]) {
				final_output = final_output + "<td>";
				output_elements.shift();
				while (output_elements.includes(fields_list[i])) {
					final_output = final_output + output_elements.shift().replace(/^["'](.+(?=["']$))["']$/, '$1').replace(/\\/gi,'') + ", "; 
					//final_output = final_output + output_elements.shift() + ", ";//.replace(/^["'](.+(?=["']$))["']$/, '$1').replace(/\\/gi,'') + ", "; 
					output_elements.shift();
				}
				if (output_elements.length > 0) {
					final_output = final_output + output_elements.shift().replace(/^["'](.+(?=["']$))["']$/, '$1').replace(/\\/gi,'');
				}
				final_output = final_output + "</td>"
			// If there is nothing found, just add an empty cell
		} else {
			final_output = final_output + "<td></td>";
		}
	}
		// end of the row								
		final_output = final_output + "<td width='1%'><button class='edit-row button' type='button'id='button' onClick='edit_row(this)'><span class='glyphicon glyphicon-edit' /></button></td><td width='1%'><button class='delete-row button'' type='button' id='button' onClick='delete_row(this)'><span class='glyphicon glyphicon-remove' /></button></td></tr>";
	}
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
	output_elements = [];
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < character_info_list.length; i++) {
		session.query("Pred = " + character_info_list[i] + ", findall([Pred, Info], call( Pred, " + character_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	add_to_table(character_tag, character_fields); 
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
	output_elements = [];
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < location_info_list.length; i++) {
		session.query("Pred = " + location_info_list[i] + ", findall([Pred, Info], call( Pred, " + location_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the character if it matches the search
	add_to_table(location_tag, location_fields); 
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
	output_elements = [];
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < information_info_list.length; i++) {
		session.query("Pred = " + information_info_list[i] + ", findall([Pred, Info], call( Pred, " + information_tag + ", Info), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the info if it matches the search
	add_to_table(information_tag, information_fields); 
}

function get_quest_info() {
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_quest(bindings[i]);
		}
	}
	bindings = [];
	session.query("quest(Quest), quest_info_list(Quest, Quest_Info_List).");
	session.answers(get_callback(get_all_bindings));
}

function get_quest(binding) {
	if (binding != null) {
		var quest_name = binding.lookup("Quest"); 
		var quest_info_list = binding.lookup("Quest_Info_List");
		var list = quest_info_list.toJavaScript();
		tagList.push(quest_name); 
		infoList.push(list);
	}
}

// Takes the list of all info info lists, and for each element in the list, outputs it 
function print_quest(quest_tag, quest_info_list) {
	output = "";
	output_elements = [];
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < quest_info_list.length; i++) {
		session.query("Pred = " + quest_info_list[i] + ", findall([Pred, Quest], call( Pred, " + quest_tag + ", Quest), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the info if it matches the search
	add_to_table(quest_tag, quest_fields); 
}

function get_conditional_info() {
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_conditional(bindings[i]);
		}
	}
	bindings = [];
	session.query("conditional(Conditional), conditional_info_list(Conditional, Conditional_Info_List).");
	session.answers(get_callback(get_all_bindings));
}

function get_conditional(binding) {
	if (binding != null) {
		var conditional_name = binding.lookup("Conditional"); 
		var conditional_info_list = binding.lookup("Conditional_Info_List");
		var list = conditional_info_list.toJavaScript();
		tagList.push(conditional_name); 
		infoList.push(list);
	}
}

// Takes the list of all info info lists, and for each element in the list, outputs it 
function print_conditional(conditional_tag, conditional_info_list) {
	output = "";
	output_elements = [];
	var get_all_bindings = function(answer) {
		print_list_info(answer);
	}
	for (var i = 0; i < conditional_info_list.length; i++) {
		session.query("Pred = " + conditional_info_list[i] + ", findall([Pred, Conditional], call( Pred, " + conditional_tag + ", Conditional), List).");
		session.answer(get_all_bindings);
	}
	// Get the appropriate list and output the info if it matches the search
	add_to_table(conditional_tag, conditional_fields); 
}

// Adding new entities to the database

// Addds a new character to the world from input 
function add_character() { 
	// Check that they're submitting a valid character tag
	if (tag != null && tag != '') {
		// Get the values from the form  
		var query = "asserta(character(" + tag + ")).";
		var character_info_list = "asserta(character_info_list(" + tag
		var info_list_array = [];

		for (var i = 1; i < character_fields.length; i++) {
			let field = character_fields[i];
			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(', '); 
				for (var j = 0; j < result_array.length; j++) {
					query = query + "asserta(" + field + "(" + tag + " , \"" + result_array[j] + "\"))."
				}
				info_list_array.push(character_fields[i]); 
			}
		}

		character_info_list = character_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + character_info_list; 
		
		var add_to_world = function(bindings) {
			display_active_list();
			clear_form_entries();
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(add_to_world));
	}
}

// Addds a new location to the world from input 
function add_location() { 
	if (location_tag != null && location_tag != '') {
		var query = "asserta(location(" + location_tag + ")).";
		var location_info_list = "asserta(location_info_list(" + location_tag
		var info_list_array = [];

		for (var i = 1; i < location_fields.length; i++) {
			let field = location_fields[i];
			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(', '); 
				for (var j = 0; j < result_array.length; j++) {
					query = query + "asserta(" + field + "(" + location_tag + " , \"" + result_array[j] + "\"))."
				}
				info_list_array.push(location_fields[i]); 
			}
		}
		location_info_list = location_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + location_info_list; 
		
		var add_to_world = function(bindings) {
			display_active_list();
			clear_form_entries();
			//clear_variable_values();
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(add_to_world));
	}
}

function clear_variable_values() {
	for (var i = 0; i < information_fields.length; i++) {
		information_fields[i] = "";
	}

}

// Addds a new information piece to the world from input 
function add_info() { 
	// Check that they're submitting a valid info tag
	if (information_tag != null && information_tag != '') {
		var query = "asserta(info(" + information_tag + ")).";
		var information_info_list = "asserta(information_info_list(" + information_tag
		var info_list_array = [];

		for (var i = 1; i < information_fields.length; i++) {
			let field = information_fields[i];

			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(', '); 
				for (var j = 0; j < result_array.length; j++) {
					query = query + "asserta(" + field + "(" + information_tag + " , \"" + result_array[j] + "\"))."
				}
				info_list_array.push(information_fields[i]); 
			}
		}

		information_info_list = information_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + information_info_list; 
		var add_to_world = function(bindings) {
			display_active_list();
			clear_form_entries();
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(add_to_world));
	}
}

function add_quest() { 
	if (quest_tag != null && quest_tag != '') {
		var query = "asserta(quest(" + quest_tag + ")).";
		var quest_info_list = "asserta(quest_info_list(" + quest_tag
		var info_list_array = [];

		for (var i = 1; i < quest_fields.length; i++) { 
			let field = quest_fields[i];
			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(', '); 
				for (var j = 0; j < result_array.length; j++) {
					query = query + "asserta(" + field + "(" + quest_tag + " , \"" + result_array[j] + "\"))."
				}
				info_list_array.push(quest_fields[i]); 
			}
		}
		quest_info_list = quest_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + quest_info_list; 
		
		var add_to_world = function(bindings) {
			display_active_list();
			clear_form_entries();
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(add_to_world));
	}
}
 
function add_conditional() { 
	// Check that they're submitting a valid character tag
	if (conditional_tag != null && conditional_tag != '') {
		// Get the values from the form  
		var query = "asserta(conditional(" + conditional_tag + ")).";
		var conditional_info_list = "asserta(conditional_info_list(" + conditional_tag
		var info_list_array = [];

		for (var i = 1; i < conditional_fields.length; i++) {
			let field = conditional_fields[i];
			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(', '); 
				for (var j = 0; j < result_array.length; j++) {
					query = query + "asserta(" + field + "(" + conditional_tag + " , \"" + result_array[j] + "\"))."
				}
				info_list_array.push(conditional_fields[i]); 
			}
		}

		conditional_info_list = conditional_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + conditional_info_list; 
		
		var add_to_world = function(bindings) {
			display_active_list();
			clear_form_entries();
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(add_to_world));
	}
}

function remove_character() {		
	var query = "retract(character(" + tag + ")).";
	var character_info_list = "retract(character_info_list(" + tag
	var info_list_array = [];

	for (var i = 1; i < character_fields.length; i++) {
		let field = character_fields[i];
		if (eval(field) != null && eval(field) != '') {
			let result = eval(field);
			result_array = result.split(','); 
			for (var j = 0; j < result_array.length; j++) {	
				if (field == "occupation" || field == "faction") {
					query = query + "retract(" + field + "(" + tag + " , \"" + result_array[j] + "\"))."
				} else {
					query = query + "retract(" + field + "(" + tag + " , " + result_array[j] + "))."
				}
			}
			info_list_array.push(character_fields[i]); 
		}
	}

	character_info_list = character_info_list + ", [ " + info_list_array.toString() + "])).";
	query = query + character_info_list; 
		
	var remove_from_world = function(bindings) {
	}

	bindings = [];
	session.query(query);			
	session.answers(get_callback(remove_from_world));
}

function remove_location() {
	var query = "retract(location(" + location_tag + ")).";
		var location_info_list = "retract(location_info_list(" + location_tag
		var info_list_array = [];

		for (var i = 1; i < location_fields.length; i++) {
			let field = location_fields[i];
			if (eval(field) != null && eval(field) != '') {
				let result = eval(field);
				result_array = result.split(','); 
				for (var j = 0; j < result_array.length; j++) {	
					if (field == "location_name") {
						query = query + "retract(" + field + "(" + location_tag + " , \"" + result_array[j] + "\"))."
					} else {
						query = query + "retract(" + field + "(" + location_tag + " , " + result_array[j] + "))."
					}
				}
			info_list_array.push(location_fields[i]); 
			}
		}
		location_info_list = location_info_list + ", [ " + info_list_array.toString() + "])).";
		query = query + location_info_list; 
		
		var remove_from_world = function(bindings) {
		}

		bindings = [];
		session.query(query);			
		session.answers(get_callback(remove_from_world));
}

function remove_info() { 
	var query = "retract(info(" + information_tag + ")).";
	var information_info_list = "retract(information_info_list(" + information_tag
	var info_list_array = [];

	for (var i = 1; i < information_fields.length; i++) {
		let field = information_fields[i];
		if (eval(field) != null && eval(field) != '') {
			let result = eval(field);
			result_array = result.split(','); 
			for (var j = 0; j < result_array.length; j++) {	
				if (field == "info_desc") {
					query = query + "retract(" + field + "(" + information_tag + " , \"" + result_array[j] + "\"))."
				} else {
					query = query + "retract(" + field + "(" + information_tag + " , " + result_array[j] + "))."
				}
			}
			info_list_array.push(information_fields[i]); 
		}
	}

	information_info_list = information_info_list + ", [ " + info_list_array.toString() + "])).";
	query = query + information_info_list; 

	var remove_from_world = function(bindings) {
		//clear_variable_values();
	}

	bindings = [];
	session.query(query);			
	session.answers(get_callback(remove_from_world));
}

function remove_quest() { 
	var query = "retract(quest(" + quest_tag + ")).";
	var quest_info_list = "retract(quest_info_list(" + quest_tag
	var info_list_array = [];

	for (var i = 1; i < quest_fields.length; i++) {
		let field = quest_fields[i];
		if (eval(field) != null && eval(field) != '') {
			let result = eval(field);
			result_array = result.split(','); 
			for (var j = 0; j < result_array.length; j++) {	
				if (field == "quest_desc") {
					query = query + "retract(" + field + "(" + quest_tag + " , \"" + result_array[j] + "\"))."
				} else {
					query = query + "retract(" + field + "(" + quest_tag + " , " + result_array[j] + "))."
				}
			}
			info_list_array.push(quest_fields[i]); 
		}
	}

	quest_info_list = quest_info_list + ", [ " + info_list_array.toString() + "])).";
	query = query + quest_info_list; 

	var remove_from_world = function(bindings) {
	}

	bindings = [];
	session.query(query);			
	session.answers(get_callback(remove_from_world));
}

function remove_conditional() {		
	var query = "retract(conditional(" + conditional_tag + ")).";
	var conditional_info_list = "retract(conditional_info_list(" + conditional_tag
	var info_list_array = [];

	for (var i = 1; i < conditional_fields.length; i++) {
		let field = conditional_fields[i];
		if (eval(field) != null && eval(field) != '') {
			let result = eval(field);
			result_array = result.split(','); 
			for (var j = 0; j < result_array.length; j++) {	
				if (field == "conditional_desc") {
					query = query + "retract(" + field + "(" + conditional_tag + " , \"" + result_array[j] + "\"))."
				} else {
					query = query + "retract(" + field + "(" + conditional_tag + " , " + result_array[j] + "))."
				}
			}
			info_list_array.push(conditional_fields[i]); 
		}
	}


	conditional_info_list = conditional_info_list + ", [ " + info_list_array.toString() + "])).";
	query = query + conditional_info_list; 
		
	var remove_from_world = function(bindings) {
	}

	bindings = [];
	session.query(query);			
	session.answers(get_callback(remove_from_world));
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
		output_list.innerHTML = output_list.innerHTML + "<div class='output-row'>" + "<strong>tag:</strong> " + tag + "&emsp;" + output +  "</div>"; 
	}
}

function generate_visualization() {
	output = "";

	// for each piece of information, find the character associated with that piece of info 
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character_with_info(bindings[i]);
		}
		// Then get the quests associated with each character 
		get_quests(); 
		// Once you get the nodes, get the connections
		//get_connections();
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
		output = output + info_tag + "[\"<p>(" + char_tag + ") " + info_desc_breaks + "</p>\"]:::Info\n";
	}
}

function get_quests() {
	// for each quest, find the character associated with that quest
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character_with_quest(bindings[i]);
		}
		get_conditionals(); 
		// Once you get the nodes, get the connections
		//get_connections();
	}
	bindings = [];
	session.query("quest(Quest), has_quest(CharTag, Quest), quest_desc(Quest, QuestDesc).");
	session.answers(get_callback(get_all_bindings));
}


function get_character_with_quest(binding) {
	if (binding != null) {
		var quest_tag = binding.lookup("Quest"); 
		var char_tag = binding.lookup("CharTag");
		var quest_desc = binding.lookup("QuestDesc");
		var quest_desc_breaks = addBreaks(quest_desc); 
		output = output + quest_tag + "[\"<p>(" + char_tag + ") " + quest_desc_breaks + "</p>\"]:::Quest\n";
	}
}

function get_conditionals() {
	// for each conditional, find the character associated with that conditional
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character_with_conditional(bindings[i]);
		}
		// Once you get the nodes, get the connections
		get_connections_info();
	}
	bindings = [];
	session.query("conditional(Conditional), has_conditional(CharTag, Conditional), conditional_desc(Conditional, ConditionalDesc).");
	session.answers(get_callback(get_all_bindings));
}


function get_character_with_conditional(binding) {
	if (binding != null) {
		var conditional_tag = binding.lookup("Conditional"); 
		var char_tag = binding.lookup("CharTag");
		var conditional_desc = binding.lookup("ConditionalDesc");
		var conditional_desc_breaks = addBreaks(conditional_desc); 
		output = output + conditional_tag + "[\"<p>(" + char_tag + ") " + conditional_desc_breaks + "</p>\"]:::Conditional\n";
	}
}

function get_connections_info() {
	output_connections = "";
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_connection(bindings[i]);
		}
		// Once you have the nodes and connections, display the graph
		display_graph();
		//get_connections_locations();
	}
	bindings = [];
	session.query("goes_to_info(Info, InfoNext).");
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
	output_connections = output_connections + "classDef Quest fill:#FFA78E,stroke:#FFF;\n" + 
	"classDef Info fill:#BCD6BB,stroke:#FFF;\n" + 
	"classDef Conditional fill:#F6DD8B,stroke:#FFF;"
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


function display_character_form() {
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="first_name" value="" placeholder="Enter first name" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="last_name" value="" placeholder="Enter last name" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="occupation" value="" placeholder="Enter occupation" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="status" value="" placeholder="Enter status (ex. alive)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="has_met_party" value="" placeholder="Has met party (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="faction" value="" placeholder="Enter faction" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="friend_of" value="" placeholder="Friend of (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="family_of" value="" placeholder="Family of (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="knows_info" value="" placeholder="Knows info (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="has_quest" value="" placeholder="Has quest (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="has_conditional" value="" placeholder="Has conditional (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add character" id="button" onClick="submit_info();" /></div>';
	form.innerHTML = form.innerHTML + '<div><button type="submit" class="btn cancel" onclick="closeForm()">Close</button></div>'
}

function display_location_form() {
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_name" value="" placeholder="Enter location name" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_known" value="" placeholder="Party knows about location (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="in_region" value="" placeholder="Enter region" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="char_in_location" value="" placeholder="Enter characters in location" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_visited" value="" placeholder="Party has visited location (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add location" id="button" onClick="submit_info();" /></div>';
	form.innerHTML = form.innerHTML + '<div><button type="submit" class="btn cancel" onclick="closeForm()">Close</button></div>'
}

function display_information_form() {
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="information_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="info_desc" value="" placeholder="Enter information description" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="info_known" value="" placeholder="Party knows information (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="info_acted_on" value="" placeholder="Party has acted on information (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="storyline" value="" placeholder="Adds to storyline" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_location" value="" placeholder="Informs party about location (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_info" value="" placeholder="Informs party about information (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add knowledge" id="update_button" onClick="submit_info();" /></div>';
	form.innerHTML = form.innerHTML + '<div><button type="submit" class="btn cancel" onclick="closeForm()">Close</button></div>'
}

function display_quest_form() {
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="quest_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="quest_desc" value="" placeholder="Enter quest description" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="storyline" value="" placeholder="Adds to storyline" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="quest_known" value="" placeholder="Party knows quest (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="quest_complete" value="" placeholder="Party has completed quest (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_location" value="" placeholder="Informs party about location (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_info" value="" placeholder="Informs party about information (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add quest" id="update_button" onClick="submit_info();" /></div>';
	form.innerHTML = form.innerHTML + '<div><button type="submit" class="btn cancel" onclick="closeForm()">Close</button></div>'
}

function display_conditional_form() {
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="conditional_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="conditional_desc" value="" placeholder="Enter description" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="storyline" value="" placeholder="Adds to storyline" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="conditional_complete" value="" placeholder="Party has satisfied conditional (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_location" value="" placeholder="Informs party about location (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_info" value="" placeholder="Informs party about information (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add conditional" id="update_button" onClick="submit_info();" /></div>';
	form.innerHTML = form.innerHTML + '<div><button type="submit" class="btn cancel" onclick="closeForm()">Close</button></div>'
}

function edit_row(ctl) {
	openForm();
	row = $(ctl).parents("tr");
	var cols = row.children("td");
	add_values_to_form(cols);
	set_values();

	if (activeList == "character") {
		remove_character();
	} else if (activeList == "location") {
		remove_location();
	} else if (activeList == "information") {
		remove_info(); 
	} else if (activeList == "quest") {
		remove_quest();
	} else {
		remove_conditional(); 
	}
	
    // Change Update Button Text
    $("#update_button").prop('value', 'Update');
}

function submit_info() {
	set_values();
	if (activeList == "character") {
		add_character();
	} else if (activeList == "location") {
		add_location();
	} else if (activeList == "information") {
		add_info(); 
	} else if (activeList == "quest") {
		add_quest();
	} else {
		add_conditional(); 
	}
	closeForm()
}

function delete_row(ctl) {
	row = $(ctl).parents("tr");
	var cols = row.children("td");
	add_values_to_form(cols);
	set_values();
	// if info 
	if (activeList == "character") {
		remove_character();
	} else if (activeList == "location") {
		remove_location();
	}  else if (activeList == "information") {
		remove_info(); 
	} else if (activeList == "quest") {
		remove_quest();
	} else {
		remove_conditional(); 
	}
	display_active_list();
	clear_form_entries();
}

function add_values_to_form(cols) {
	if (activeList == "character") {
		$("#tag").val($(cols[0]).text());
		$("#first_name").val($(cols[1]).text());
		$("#last_name").val($(cols[2]).text());
		$("#occupation").val($(cols[3]).text());
		$("#status").val($(cols[4]).text());
		$("#has_met_party").val($(cols[5]).text());
		$("#faction").val($(cols[6]).text());
		$("#friend_of").val($(cols[7]).text());
		$("#family_of").val($(cols[8]).text());
		$("#knows_info").val($(cols[9]).text());
		$("#has_quest").val($(cols[10]).text());
		$("#has_conditional").val($(cols[11]).text());
	} else if (activeList == "location") {
		$("#location_tag").val($(cols[0]).text());
		$("#location_name").val($(cols[1]).text());
		$("#location_known").val($(cols[2]).text());
		$("#in_region").val($(cols[3]).text());
		$("#char_in_location").val($(cols[4]).text());
		$("#location_visited").val($(cols[5]).text());
	} else if (activeList == "information") {
		$("#information_tag").val($(cols[0]).text());
		$("#info_desc").val($(cols[1]).text());
		$("#info_known").val($(cols[2]).text());
		$("#info_acted_on").val($(cols[3]).text());
		$("#storyline").val($(cols[4]).text());
		$("#goes_to_location").val($(cols[5]).text());
		$("#goes_to_info").val($(cols[6]).text());
	} else if (activeList == "quest") {
		$("#quest_tag").val($(cols[0]).text());
		$("#quest_desc").val($(cols[1]).text());
		$("#storyline").val($(cols[2]).text());
		$("#quest_known").val($(cols[3]).text());
		$("#quest_complete").val($(cols[4]).text());
		$("#goes_to_location").val($(cols[5]).text());
		$("#goes_to_info").val($(cols[6]).text());
	} else if (activeList == "conditional") {
		$("#conditional_tag").val($(cols[0]).text());
		$("#conditional_desc").val($(cols[1]).text());
		$("#storyline").val($(cols[2]).text());
		$("#conditional_complete").val($(cols[3]).text());
		$("#goes_to_location").val($(cols[4]).text());
		$("#goes_to_info").val($(cols[5]).text());
	} else {
		console.log("ERROR: tried to edit on a page without a table");
	}
}
function set_values() {
	if (activeList == "character") {
		tag = $("#tag").val(); 
		first_name = $("#first_name").val(); 
		last_name = $("#last_name").val(); 
		occupation = $("#occupation").val(); 
		status = $("#status").val(); 
		has_met_party = $("#has_met_party").val(); 
		faction = $("#faction").val(); 
		friend_of = $("#friend_of").val(); 
		family_of = $("#family_of").val(); 
		knows_info = $("#knows_info").val(); 
		has_quest = $("#has_quest").val(); 
		has_conditional = $("#has_conditional").val(); 
	} else if (activeList == "location") {
		location_tag = $("#location_tag").val(); 
		location_name = $("#location_name").val(); 
		location_known = $("#location_known").val(); 
		in_region = $("#in_region").val(); 
		char_in_location = $("#char_in_location").val(); 
		location_visited = $("#location_visited").val(); 
	} else if (activeList == "information") {
		information_tag = $("#information_tag").val(); 
		info_desc = $("#info_desc").val(); 
		info_known = $("#info_known").val(); 
		info_acted_on = $("#info_acted_on").val(); 
		storyline = $("#storyline").val(); 
		goes_to_location = $("#goes_to_location").val(); 
		goes_to_info = $("#goes_to_info").val(); 
	} else if (activeList == "quest") {
		quest_tag = $("#quest_tag").val(); 
		quest_desc = $("#quest_desc").val(); 
		storyline = $("#storyline").val(); 
		quest_known = $("#quest_known").val(); 
		quest_complete = $("#quest_complete").val(); 
		goes_to_location = $("#goes_to_location").val(); 
		goes_to_info = $("#goes_to_info").val(); 
	} else if (activeList == "conditional") {
		conditional_tag = $("#conditional_tag").val(); 
		conditional_desc = $("#conditional_desc").val(); 
		storyline = $("#storyline").val(); 
		conditional_complete = $("#conditional_complete").val(); 
		goes_to_location = $("#goes_to_location").val(); 
		goes_to_info = $("#goes_to_info").val(); 
	} else {
		console.log("ERROR: tried to edit on a page without a table");
	}
}

function clear_form_entries() {
	if (activeList == "character") {
		for (var i = 0; i < character_fields.length; i++) {
			clear_form_field(character_fields[i]);
		}
	} else if (activeList == "location") {
		for (var i = 0; i < location_fields.length; i++) {
			clear_form_field(location_fields[i]);
		}
	} else if (activeList == "information") {
		for (var i = 0; i < information_fields.length; i++) {
			clear_form_field(information_fields[i]);
		}
	} else if (activeList == "quest") {
		for (var i = 0; i < quest_fields.length; i++) {
			clear_form_field(quest_fields[i]);
		}
	} else if (activeList == "conditional") {
		for (var i = 0; i < conditional_fields.length; i++) {
			clear_form_field(conditional_fields[i]);
		}
	} else {
		console.log("ERROR: tried to edit on a page without a table");
	}
	
}

function search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("list-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
  	td = tr[i].getElementsByTagName("td")[0];
  	var td_text = ""; 
  	for (j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
  		var element = tr[i].getElementsByTagName("td")[j];
  		if (element) {
  			var text = element.textContent || element.innerText;
  			td_text = td_text + text + " "; 
  		}
  	}
  	if (td) {
  		txtValue = td_text;
  		if (txtValue.toUpperCase().indexOf(filter) > -1) {
  			tr[i].style.display = "";
  		} else {
  			tr[i].style.display = "none";
  		}
  	}
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 