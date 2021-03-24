function generate_visualization() {
	output = "";

	// for each piece of information, find the character associated with that piece of info 
	var get_all_bindings = function(bindings) {
		for(var i = 0; i < bindings.length; i++) {
			get_character_with_info(bindings[i]);
		}
	}
	bindings = [];
	session.query("info(Info), knows_info(CharTag, Info), info_desc(Info, InfoDesc).");
	session.answers(get_callback(get_all_bindings));
	// for each piece of information, generate connection between it and the piece of info tag it leads to 

	// put all outputs into index.html
	var viz_output = document.getElementById("viz_output");

	setTimeout(() => {
		viz_output.innerHTML = '<div class="mermaid"> \ngraph LR \n' + output + '</div>';
	}, 400);
}

function get_character_with_info(binding) {
	if (binding != null) {
		// output to this format: 
		//     RedbrandHangout["<p>(Toblin Stonehill) Redbrands hang out at Sleeping Giant Tap House and they are trouble</p>"]
		var info_tag = binding.lookup("Info"); 
		var char_tag = binding.lookup("CharTag");
		var info_desc = binding.lookup("InfoDesc");
		
		output = output + info_tag + "[\"(" + char_tag + ") " + info_desc + "\"]\n";
		console.log(output);
	}
}