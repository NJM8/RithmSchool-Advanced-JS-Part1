var expect = chai.expect;


// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

describe('sumEvenArguments', function(){
	it('returns the sum of all even arguments', function(){
		expect(sumEvenArguments(1,2,3,4)).to.equal(6);
		expect(sumEvenArguments(1,2,6)).to.equal(8);
		expect(sumEvenArguments(1,2)).to.equal(2);
	});
});

// Write a function called arrayFrom which converts an array-like-object into an array.
describe('arrayFrom', function(){
	it('creates an array from the arguements passed in', function(){
		expect(arrayFrom(1,2,3,4)).to.be.an('array');
		expect(arrayFrom('a',4,'fast',78)).to.be.an('array');
	});
});

// Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

describe('invokeMax', function(){
	function add(a, b){
		return a + b;
	}

	it('accepts a function and a max number of times to call the function', function(){
		var callOnlyThreeTimes = invokeMax(add, 3);
		expect(callOnlyThreeTimes(1,2)).to.equal(3);
		expect(callOnlyThreeTimes(4,5)).to.equal(9);
		expect(callOnlyThreeTimes(78,12)).to.equal(90);
		expect(callOnlyThreeTimes(6,3)).to.equal('Maxed Out!');
	});
});















