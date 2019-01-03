// The new keyword is used along with a constructor function to set 'this' to the object being created. New creates an empty object, sets the this to that object with the variables in the constructor, and creates an implicit return this in the function.

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

var nate = new Person('Nate', 'Mallison');

console.log(nate);