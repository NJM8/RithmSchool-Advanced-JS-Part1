'use strict'

let thing = this;

console.log(thing);

let whatIsThis = function(){
	return this;
}

let variableInThis = function() {
	this.person = "Ella";
	console.log(whatIsThis());
}

variableInThis();

console.log(person);
console.log(whatIsThis());
