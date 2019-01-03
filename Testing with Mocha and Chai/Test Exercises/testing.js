// Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

let replaceWith = function(str, a, b){
	let re = new RegExp(a, "i");
	let newStr = str.replace(re, b);

	return newStr;
};

// Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

let expand = function(myArray, num){
	let myNewArray = [];
	for (let i = 0; i < num; i++){
		myArray.forEach(function(element){
			myNewArray.push(element);
		});
	};
	return myNewArray;
};

// Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. Watch out for NaN - it is a typeof "number"!

let acceptNumbersOnly = function(){
	let args = Array.from(arguments);
	let allNumbers = true;

	args.forEach(function(element){
		if(typeof element !== 'number'){
			allNumbers = false;
		} else if(isNaN(element)){
			allNumbers = false;
		};
	});

	return allNumbers;
};

// Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted

let mergeArrays = function(arrayOne, arrayTwo){
	let joinedArrays = arrayOne.concat(arrayTwo);
	joinedArrays.sort(function(a,b){
		return a - b;
	});

	return joinedArrays;
};

// Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

let mergeObjects = function(objectOne, objectTwo){
	let joinedObjects = {};

	for (let key in objectOne){
		if(joinedObjects.hasOwnProperty(key) === false){
			joinedObjects[key] = objectOne[key];
		};
	};

	for (let key in objectTwo){
		joinedObjects[key] = objectTwo[key];
	};

	return joinedObjects;
};








