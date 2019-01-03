// Define encapsulation, abstraction, and inheritance in your own words.
// Encapsulation is the seperation of concerns into classes. Each class has data and functions to work with that data. The class owns the data and the functions, no other class can modify them.
// Abstraction allows us to think about what our classes and functions do at a higher level. We abstract away the details so that we don't have to worry about them and instead we can think about what the class does as a whole.
// Inheritence is when a child class takes one functionality of the parent class. Say we have a house class that defines the basic of a house. We can create a victorian house class from that which will have all the same details and then some differences.

// Think about how you would design a game of checkers. What data do you want to save? What components are involved in a checkers game that we could turn into a class? What would the relationship be between one class and another?
// Data could be the board and all the piece locations, number of pieces and functions to play a piece, two players each with a score. The board could hold all the piece data and the required functions, new game, play red piece, play black piece, give a score number back if a score was made. The players would hold their current score, past moves, and calls to make moves.

var Dog = function(name, age){
	this.name = name;
	this.age = age;
	this.bark = function(){
		return this.name + ' just barked!';
	}
}

// the new keyword allows us to use constructor functions like above. It creates a new object, sets the value of this to the object created, creates a return this so that the object created can be returned from the function, finally it adds the __proto__ property to connect the new object to it's constructor.

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 2);

console.log(rusty.bark());
console.log(fido.bark());

// To reduce code duplication when creating similar constructor functions, you can use call inside of a constructor to utilize that constructors object in another constructor function. 

var Car = function(year, make, model){
	this.year = year;
	this.make = make;
	this.model = model;
	this.numWheels = 4;
}

var Motorcycle = function(year, make, model){
	// Rather than duplicating the code in the Car constructor, we use it!
	Car.call(this, year, make, model);
	// The this property in the call is passing in the object created by Motorcycle, otherwise the other properties passed in will be bound to the object created by the Car constructor.
	// You couls also use apply: Car.apply(this, [year, make, model]); OR Car.apply(this, arguments);
	this.numWheels = 2;
}

// What is the purpose of a constructor function?
// To provide a resuable structure to create objects with a set of properties.

// What does the new keyword do?
// It creates an object, sets the value of this to that object, creates a return this so that the object can be returned from the function, and connects the objects __proto__ property to the constructor.

// What does the keyword this refer to inside of a constructor function?
// The object being created.

// What is a class? What is an instance?
// A class is a generic constructor objects, an instance is a created object from that constructor.

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

var Person = function(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num){
		return this.favoriteNumber * num;
	}
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

var nate = new Person('Nate', 'Mal', 'blue', 8);
console.log(nate.multiplyFavoriteNumber(4));

// Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

// Should be:

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}

console.log(nate.prototype);

function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
	this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
	this.isRunning = false;
}

Vehicle.prototype.honk = function(){
	if (this.isRunning) {
		return "Beep!";
	} else {
		return "The car is not running.";
	}
}




























