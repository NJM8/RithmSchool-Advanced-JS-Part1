let person = {
	firstName: 'colt',
	sayHi: function(){
		return 'Hi ' + this.firstName;
	},
	determineContext: function(){
		return this === person;
	},
	dog: {
		sayHello: function(){
			return 'Hello ' + this.firstName;
		},
		determineContext: function(){
			return this === person;
		}
	}
}


console.log(person.sayHi());
console.log(person.determineContext());
console.log(person.dog.sayHello());
console.log(person.dog.determineContext());