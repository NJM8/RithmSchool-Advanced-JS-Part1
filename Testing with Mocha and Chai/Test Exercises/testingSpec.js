var expect = chai.expect;

// Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

let strLower = 'abc';
let strUpper = 'ABC';

describe('replaceWith', function(){
	it('replaces lower case letters', function(){
		expect(replaceWith(strLower,'a','b')).to.deep.equal('bbc');
	});
	it('replaces upper case letters', function(){
		expect(replaceWith(strUpper, 'A', 'B')).to.deep.equal('BBC');
	});
});

// Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

let myArray = [1,2,3];

describe('expand', function(){
	it('expands the array by the number specified', function(){
		expect(expand(myArray, 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
});

// Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. Watch out for NaN - it is a typeof "number"!

describe('acceptNumbersOnly', function(){
	it('returns false if there are letters in the passed arguements', function(){
		expect(acceptNumbersOnly(1, 'foo')).to.equal(false);
	});
	it('returns true if all the arguements are numbers', function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	});
	it('returns false if NaN is present', function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
});

// Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted

describe('mergeArrays', function(){
	it('combines and sorts two arrays of numbers', function(){
		expect(mergeArrays([1,2],[4,3])).to.deep.equal([1,2,3,4]);
	});
});

// Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

describe('mergeObjects', function(){
	it('combines two objects, the second object takes precedence if a key is shared', function(){
		expect(mergeObjects({name: "foo", num: 33}, {test: 'thing', num: 55})).to.deep.equal({name: 'foo', test: 'thing', num: 55});
	});
});











