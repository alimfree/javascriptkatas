describe('MyApp', function() {
	'use strict';

	beforeEach(module('MyApp'));

	describe('Prime', function() {
		it('generates primes less than 10', inject(function(Prime) {
			expect(Prime.factors(10)).toEqual([3,5,7]);
		}));

		it('determins whether 5 is prime', inject(function(Prime) {
			expect(Prime.number(5)).toEqual(true);
		}));

	});
});