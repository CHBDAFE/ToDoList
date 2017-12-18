/*global app, jasmine, describe, it, beforeEach, expect */

describe('Math', function () {
	'use strict';

	describe('random_Id', function () {
        var Id=random_Id();
        
		it('should generated a random ID between 1 and 999999', function () {
			expect(Id).toBeGreaterThan(0);
			expect(Id).toBeLessThan(1000000);
		});

	});
});
