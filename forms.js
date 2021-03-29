
function display_character_form() {
	var form = document.getElementById("form");
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
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add character" id="button" onClick="add_character();" /></div>';
}

function display_location_form() {
	var form = document.getElementById("form");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_name" value="" placeholder="Enter location name" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_known" value="" placeholder="Party knows about location (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="in_region" value="" placeholder="Enter region" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="char_in_location" value="" placeholder="Enter characters in location" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="location_visited" value="" placeholder="Party has visited location (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add location" id="button" onClick="add_location();" /></div>';
}

function display_information_form() {
	var form = document.getElementById("form");
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="information_tag" value="" placeholder="Enter tag" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="information_description" value="" placeholder="Enter information description" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="information_known" value="" placeholder="Party knows information (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="information_acted_on" value="" placeholder="Party has acted on information (ex. true)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="storyline" value="" placeholder="Adds to storyline" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_location" value="" placeholder="Informs party about location (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="textinput" type="text" id="goes_to_information" value="" placeholder="Informs party about information (enter tag)" /></div>';
	form.innerHTML = form.innerHTML + '<div><input class="button" type="button" value="Add information" id="button" onClick="add_information();" /></div>';
}
