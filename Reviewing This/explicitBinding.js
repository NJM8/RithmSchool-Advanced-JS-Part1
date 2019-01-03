// reviewing Call, Apply, and Bind. Call and Apply both immediately invoke the expression. Bind does not. Call and Bind both take a list of comma seperated arguments. Apply can only take two arguments.



var animal = {
	introduce: function(){
		return this.name + ' is a ' + this.type + ' and says ' + this.sound + '!';
	}
};

var whiskey = {
	name: 'Whiskey',
	type: 'dog',
	sound: 'woof'
};

var moxie = {
	name: 'Moxie',
	type: 'cat',
	sound: 'meow'
};

console.log(animal.introduce.call(whiskey));
console.log(animal.introduce.call(moxie));

var personOne = {
	name: 'Matt', 
	greet: function(otherName){
		return 'Hi, ' + otherName + ', I\'m ' + this.name + '. Nice to meet you!';
	}
};

var personTwo = {
	name: 'Tim' 
};

console.log(personOne.greet(personTwo.name));
// console.log(personTwo.greet(personOne)); This returns TypeError, personTwo.greet is not a function
console.log(personOne.greet.call(personTwo));
console.log(personOne.greet.call(personTwo, personOne.name));

function sumArgumentsIncorrectly(){
	return arguments.reduce(function(acc, next){
		return acc + next
	}, 0)
}

// console.log(sumArgumentsIncorrectly(1,2,3,4,5)); This throws a type error because the arguements 'array-like' object does not contain the fuction reduce

function sumArgumentsCorrectly(){
	return [].slice.call(arguments).reduce(function(acc, next){
		return acc + next;
	}, 0)
}

console.log(sumArgumentsCorrectly(1,2,3,4,5));

var colt = {
	name: 'Colt',
	sayHi: function(){
		return "Hi, " + this.name;
	},
	addNumbers: function(a,b,c,d){
		return this.name + ' just calculated ' + (a+b+c+d);
	}
}

var elie = {
	name: "Elie"
}

console.log(colt.addNumbers(1,2,3,4));
console.log(colt.addNumbers.call(elie, 1,2,3,4));
// apply is very similar to call except that it only takes a maximum of two arguments. apply is better if you don't know how many arguments you need to pass.
console.log(colt.addNumbers.apply(elie, [1,2,3,4]));

// common apply use case to find the max value in an array, Math.max is designed for a list of numbers not an array.
var numbers = [1,2,3,4,5];

console.log(Math.max.apply(this,numbers));
console.log(Math.max(numbers)); //NaN

// Another common use case to flatten an array or arrays but preserve the order
var arrayToBeFlattened = [1,2,[3,4],[5,6]];

console.log([].concat.apply([],arrayToBeFlattened));

function add(a,b){
	return a + b;
}

var partialAdd = add.bind(this, 2);
console.log(partialAdd(4));

var elieCalc = colt.addNumbers.bind(elie,1,2,3,4);
console.log(elieCalc());

// bind is great for asynchronus code as you can set the value of this before you know all the paramters to pass, and before you know when you need to use it.
var elieCalc2 = colt.addNumbers.bind(elie,1,2);
console.log(elieCalc2(3,4));

// bind is also often used with operations that we do not want to run immediately. ex. set timeout
var amy = {
	name: 'Amy',
	sayHiLater: function(){
		setTimeout(function(){
			console.log("Hi, " + this.name);
		}.bind(this),1000);
	}
}

amy.sayHiLater();













