//MOAR Reduction functions by fun fun function
//part IV of higher-order functions video set
//Now I'll invoke a data.txt, an old database,
//into a JSON top-notch file

//logging in a node.js command prompt
//for 'fs' to work, as executing
//'node ancestry_moarReduction.js',
//located in folder

//i ask for fs to be used
var fs = require("fs");

//i make the readfile call, and parse it in utf-8 on command prompt
var output = fs
	.readFileSync("data.txt", "utf8")
	//in order to be able to make the JSON file,
	//we first need to break this chunk of data in arrays
	//we start splitting it by their line breaks
	.split("\n")
	//we use map to generate a new list of array,
	//separating the array we generated in separated strings
	//without touching the original, pure functions FTW, bro
	.map(line => line.split("\t"))
	//we use reduce to go even further and place each string with its corresponding id, AKA 'labeling' the data we brought up
	//we tell reduce costumers is the first variable, as each iteration will be one new 'costumer'
	//we then tell reduce line will be the thing we wanna 'sum' up every time its looping on a 'costumer'
	.reduce((costumers, line) => {
		//we tell the new object will be an existing one, or will create a new one instead, just a small fallback
		costumers[line[0]] = costumers[line[0]] || [];
		//for each costumer, we're gonna push...
		costumers[line[0]].push({
			//one label at a time, we assign their respectives lines/strings
			product: line[2],
			price: line[3],
			quantity: line[4]
				//we trim the last bit, the break line
				.trim()
		});
		return costumers;
	}, {});

var parseOutput = JSON.stringify(output);

var createJSON = fs.writeFile("jsonOutput.json", parseOutput, function(err) {
	if (err) {
		return console.log(
			"An error writing or replacing the file has occured"
		);
	}
	console.log("Your JSON file was created or replaced");
});

console.log("output", JSON.stringify(output, null, 2));
