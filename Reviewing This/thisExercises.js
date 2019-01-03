//What is the value of this in the following example.
var data = this;
console.log(this);
// window?


//What does this function output and why?
function logThis(){
	return this;
}
console.log(logThis());
// window, because this is not set to anything so it is in the window context.


//What does this function output and why?
var instructor = {
	firstName: 'Tim',
	sayHi: function(){
		console.log('Hello! This is ' + this.firstName);
	}
}
instructor.sayHi();
//Logs Hello! This is Tim, because the value of this is set to the nearest enclosing object.


//What does this function output and why?
var teacher = {
	firstName: 'Tim',
	info: {
		catOwner: true,
		boatOwner: true
	},
	displayInfo: function(){
		console.log('Cat owner? ' + this.catOwner);
	}
}
teacher.displayInfo();
//Logs Cat owner? undefined, because again this is set to the enclosing parent object and the info object is not available to the displayInfo function.

//What does this function output and why?
var instructorTwo = {
	firstName: 'Tim',
	info: {
		catOwner: true,
		boatOwner: true,
		displayLocation: function(){
			console.log(this.data.location)
		},
		data: {
			location: 'Oakland'
		}
	},
}
instructorTwo.info.displayLocation();
//Logs undefined as the data location object is outside of the scope of the this in the displayLocation function.
// I was wrong. It logs Oakland because the data object is available to the info object.

//What does this function output and why?
var instructorThree = {
	firstName: 'Tim',
	info: {
		catOwner: true,
		boatOwner: true,
		displayLocation: function(){
			console.log(this.location)
		},
		data: {
			location: 'Oakland',
			logLocation: this.displayLocation
		}
	},
}
//instructorThree.info.data.logLocation()//Why do we get an error here?
//We get an error because when logLocation is not written as a function that can be called.

//Fix the following code
var obj = {
	firstName: 'Harry Potter',
	person: {
		sayHi: function(){
			return 'Hi, ' + this.firstName;
		}
	}
}
//Can be fixed by changing this.firstName to obj.firstName or by using obj.person.saHI.call(obj);
console.log(obj.person.sayHi());

//List two examples of array-like objects that we have seen.
// the arguments array passed into a function, almost any element in the DOM

// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

var sumEvenArguments = function(){
	var total = 0;
	var args = Array.from(arguments);
	args.forEach(function(element){
		if(element % 2 === 0){
			total += element;
		}
	});
	return total;
}

// Write a function called arrayFrom which converts an array-like-object into an array.
function sample(arguments){
	var arr = arrayFrom(arguments)
	if (!arr.reduce) throw 'This is not an array!'
	return arr.reduce(function(acc, next){
		return acc + next;
	}, 0)
}

var arrayFrom = function(){
	var args = [].map.call(arguments, function(element){
		return arguments[element];
	});
	return args;
}

console.log(sample(1,2,3,4));
console.log(arrayFrom(1,2,3,4));

// Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

var invokeMax = function(func, num){
	var count = 0;

	var invokeAndIncrement = function(a,b){
		count++;
		if(count > num){
			return "Maxed Out!";
		}else{
			return func(a,b);
		}
	}
	return invokeAndIncrement;
};

var add = function(a,b){
	return a + b;
}

var addOnlyThreeTimes = invokeMax(add, 3);

console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(2,3));
console.log(addOnlyThreeTimes(3,4));
console.log(addOnlyThreeTimes(4,5));
console.log(addOnlyThreeTimes(1,2));


var counter = function(func, num){
	var count = 0;
	var doCount = function(){
		count++;
		if (count > num){
			return 'maxed out';
		}
		return func();
	}
	return doCount;
};

var myCount = counter(add, 3);

console.log(myCount(1,2));
console.log(myCount(2,3));
console.log(myCount(3,4));
console.log(myCount(4,5));
console.log(myCount(5,6));

// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.


function guessingGame(amount){
	var answer = Math.round(Math.random() * 10);
	var guesses = 0;
	var correctGuess = false;

	return function(guess){
		guesses++;
		if (guesses > amount && correctGuess == false){
  			return 'You didn\'t get it. You\'re out of guesses, better luck next time!';
  		} else if (correctGuess == true){
  			return 'You are all done playing';
  		}

  		switch (true){
  			case guess < answer:
  				return 'Too low, guess again.';
  				break;
  			case guess > answer:
  				return 'Too high, guess again.';
  				break;
  			case guess == answer:
  				correctGuess = true;
  				return 'You got it! The answer was ' + answer;
  				break;
  		};
  	};
};

var playAGame = guessingGame(5);

console.log(playAGame(2));
console.log(playAGame(3));
console.log(playAGame(6));
console.log(playAGame(7));
console.log(playAGame(8));
console.log(playAGame(9));



















