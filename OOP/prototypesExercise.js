// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).

var Person = function(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
	this.family = [];
}

// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

Person.prototype.fullName = function(){
	return this.firstName + ' ' + this.lastName;
}

var p = new Person("Shana", "Malarkin", "Green", 38);
console.log(p.fullName()); // Shana Malarkin

// Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
Person.prototype.toString = function(){
	var name = this.fullName();
	return name + ', Favorite Color: ' + this.favoriteColor + ', Favorite Number: ' + this.favoriteNumber;
}

console.log(p.toString()); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38

// Add a property on the Person object called family which is an empty array.

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.

Person.prototype.addToFamily = function(familyMember){
	if (familyMember instanceof Person){
		for (var i = 0; i < this.family.length; i++){
			if (this.family[i] === familyMember){
				console.log('this person is already in the family list');
				return this.family.length;
			} 
		}
		this.family.push(familyMember);
		return this.family.length;
	}
	return 'You must pass an instance of Person to add to the family list';
}

console.log(p.family); // []
console.log(p.addToFamily(p)); // 1
console.log(p.family.length); // 1
console.log(p.addToFamily(p)); // 1 - No duplicates!
console.log(p.family.length); // Length should still be 1
console.log(p.family.length); // Length should still be 1

// Implement a function that reverses a string and place it on the String.prototype

String.prototype.reverseString = function(str){
	// initialize new empty string
  var newStr = '';
  
  // walk through string passed to function backwards, concatenating 
  // each letter from the end onto the start of the new string
  for ( var i = 1; i < str.length + 1; i++) { 
      newStr += str.slice(str.length - i, str.length - i + 1);
  }
    
  // return result  
  return newStr;
};

var myStr = ''.reverseString(p.fullName());

console.log(myStr);

// For the last part, let's think less about the actual code we need to write and more about thinking in an Object Oriented way.

// Let's imagine that we are building an application which allows users to play chess. What constructor functions would we need? What kinds of prototype functions and properties would we need as well?

// We would need constructors for the board, the players, and a generic one to define pieces. We would need functions for movement and piece interaction. The board would need a property to track the pieces.

// Let's imagine that we are building a game of Tic Tac Toe. What kinds of prototype functions and properties would we need as well?

// For Tic Tac Toe I would just make functions to apply a move, a board with properties to track moves, and a function to display a winner.









