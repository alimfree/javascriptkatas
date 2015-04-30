var primeFactors = require('../src/primeFactors');

describe('PrimeFactors', function(){
	it("Generates prime factors under 10", function(){

		primeFactors = new PrimeFactors();
		primes = primeFactors.generate(10);
		expect(primes).toEqual([3,5,7]); 
	});
});
