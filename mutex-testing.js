
// let mutex = new Mutex();
// let mutex2 = new Mutex();

// async function execute(mutex) {
//     const release = await mutex.acquire();
 
//     const result1 = await print_characters(mutex2);
 
//     // ...
     
//     const result2 = await print_locations(mutex2);
//     // ...
 
//     release();
// }
 
// execute(mutex);

print_locations();
print_characters();

// await mutex.runExclusive(async () => {
//     print_locations();
// });
// function displayUI(async() => {
// 	const release = await mutex.acquire();
 
//     await print_locations();
     
//     release();
// });

// async function execute(mutex) {
// 	mutex
//     .runExclusive(function() {
//     	bindings = [];
//         print_characters();
//     })
//     .then(function() {
//   		bindings = [];
//   		print_locations();
//     });
// }

// execute(mutex);

// print_locations();
// print_characters();



// async function execute2(mutex) {
//     const release = await mutex.acquire();
 
//     //await print_locations();
 
//     // ...
     
//     await print_characters();
//     // ...
 
 
//     release();
// }

 
//execute(mutex);
//execute2(mutex);


// updateCharacterUI(updateLocationUI);

// // Clears the current list of characters then redisplays them
// function updateCharacterUI(myCallback) {
// 	// Clear the existing lists 
// 	var names_output = document.getElementById("names_output");
// 	names_output.innerHTML = "<div> </div>"; 

// 	var locations_output = document.getElementById("locations_output");
// 	locations_output.innerHTML = "<div> </div>"; 
	
// 	//print_characters();
// 	print_locations();
// 	//myCallback();
// }

// function updateLocationUI() {
// 	print_locations();
// }



updateCharacterUI(updateLocationUI);

// Clears the current list of characters then redisplays them
function updateCharacterUI(myCallback) {
	// Clear the existing lists 
	var names_output = document.getElementById("names_output");
	names_output.innerHTML = "<div> </div>"; 

	var locations_output = document.getElementById("locations_output");
	locations_output.innerHTML = "<div> </div>"; 
	
	print_characters();
	//myCallback();
}

async function print_characters(mutex) {
    const release = await mutex.acquire();
 
    const query = await get_session_query();
 
    // ...
     
    const bindings = await get_bindings(query);

    await print_bindings(bindings);
    // ...
 
    release();
}

function get_session_query() {
	bindings = [];
	return session.query("first_name(Char, FirstName), last_name(Char, LastName).");
	//session.answers(get_callback(print_bindings));
}

function get_bindings(query) {
	if (answer == false) {
			funcWhenDone(bindings);
		}
		else {
			// We've gotten another non-false answer - add it to the bindings.
			bindings.push(answer);
		}
}

function print_bindings(bindings) {
	session.answers(bindings);
	for(var i = 0; i < bindings.length; i++) {
		print_character(bindings[i]);
	}
}
