// Create the prolog sesssion and load mini_prom_week_example.prolog.
session = pl.create();
session.consult("phandelver.prolog");

// Array of variable bindings, one per answer, returned by prolog query
var bindings = [];
print_characters();

/*
 * Returns a callback function to pass to session.answers(). 
 * The parameter is the function for the callback to call (with the bindings as parameter)
 * when prolog has found all the answers. 
*/
function get_callback(funcWhenDone) 
{
	var callbackFunc = function(answer) 
	{
		if (answer == false) 
		{
			funcWhenDone(bindings);
		}
		else 
		{
			// We've gotten another non-false answer - add it to the bindings.
			bindings.push(answer);
		}
	}

	return callbackFunc;
} 


// Gets a list of all the characters and prints them out
function print_characters() 
{
	var print_bindings = function(bindings) 
	{
		// Get output container
		for(var i = 0; i < bindings.length; i++) 
		{
			print_character(bindings[i]);
		}
	}
	bindings = [];
	session.query("character(Char).");
	session.answers(get_callback(print_bindings));
}


function print_character(binding) 
{

	if (binding != null)
	{
		var result = document.getElementById("result");
		// Look up term that has been bound to variable "Char"
		character = binding.lookup("Char"); 
		charName = character.toString().capitalize(); // Turn the Term into a string.
		console.log(charName); // Print out the name of the character. 
		result.innerHTML = result.innerHTML + "<div>" + charName +  "</div>"; // Add name to HTML page
	}
}


// Add method to the String prototype to capitalize the first letter of the String.
String.prototype.capitalize = function() 
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}
