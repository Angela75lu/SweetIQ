let convert = require('../calculator.js');
let assert = require('assert');

describe('My Calculator Test with one arithmetic operator and two numberical values', function() {
	describe('calculator addition test', function(){
    		it('3+5 should equal 8', function() {
    			assert.equal(8, my_calculator("+", 3, 5));
    		});
        	it('0+3 should equal 3', function() {
    			assert.equal(3, my_calculator("+", 0, 3));
    		}); 
		it('3+0 should equal 3', function() {
    			assert.equal(3, my_calculator("+", 3, 0));
    		});
		it('(-3)+5 should equal 2', function() {
    			assert.equal(2, my_calculator("+", -3, 5));
    		});
                it('(-3)+(-5) should equal -8', function() {
    			assert.equal(-8, my_calculator("+", -3, -5));
    		});
		it('3+(-5) should equal -2', function() {
    			assert.equal(-2, my_calculator("+", 3, -5));
    		});		
	});
	describe('calculator substraction test', function(){
    		it('9-6 should equal 3', function() {
    			assert.equal(3, my_calculator("-", 9, 6));
    		});
        	it('9-0 should equal 9', function() {
    			assert.equal(9, my_calculator("-", 9, 0));
    		}); 
		it('0-9 should equal -9', function() {
    			assert.equal(-9, my_calculator("-", 0, 9));
    		});
		it('(-9)+(-6) should equal -3', function() {
    			assert.equal(-3, my_calculator("-", -9, -6));
    		});
	});
	describe('calculator multiplcation test', function(){
    		it('9*6 should equal 54', function() {
    			assert.equal(54, my_calculator("*", 9, 6));
    		});
        	it('9*0 should equal 0', function() {
    			assert.equal(0, my_calculator("*", 9, 0));
    		}); 
		it('0*9 should equal 0', function() {
    			assert.equal(0, my_calculator("*", 0, 9));
    		});
		it('(-9)*(-6) should equal 54', function() {
    			assert.equal(54, my_calculator("*", -9, -6));
    		});
		it('(-9)*6 should equal -54', function() {
    			assert.equal(-54, my_calculator("*", -9, 6));
    		});
	}); 
       describe('calculator division test', function(){
    		it('9/6 should equal 1.5', function() {
    			assert.equal(1.5, my_calculator("/", 9, 6));
    		});
        	it('9/0 can not divide by 0', function() {
    			assert.equal(undefined, my_calculator("/", 9, 0));
    		}); 
		it('0/9 should equal 0', function() {
    			assert.equal(0, my_calculator("/", 0, 9));
    		});
		it('(-54)/(-6) should equal 9', function() {
    			assert.equal(9, my_calculator("/", -54, -6));
    		});
		it('(-54)/6 should equal -9', function() {
    			assert.equal(-9, my_calculator("/", -54, 6));
    		});
		it('(54)/(-6) should equal -9', function() {
    			assert.equal(-9, my_calculator("/", 54, -6));
    		});                

	}); 
       describe('calculator division test', function(){
		it('+ is a valid operator', function() {
    			assert.equal(15, my_calculator("+", 9, 6));
    		});
		it('- is a valid operator', function() {
    			assert.equal(3, my_calculator("-", 9, 6));
    		});         
		it('* is a valid operator', function() {
    			assert.equal(54, my_calculator("*", 9, 6));
    		});
		it('/ is a valid operator', function() {
    			assert.equal(1.5, my_calculator("/", 9, 6));
    		});
           	it('% is not a valid operator', function() {
    			assert.equal(undefined, my_calculator("%", 9, 6));
    		});
       });
      describe('two numberical values tests', function(){
    		it('aa+5 the first value aa is not a numberical value', function() {
    			assert.equal(undefined, my_calculator("+", 'aa', 5));
    		});
                it('5+aa the second value aa is not a numberical value', function() {
    			assert.equal(undefined, my_calculator("+", 5, 'aa'));
    		});
 		it('aa+bb both values aa and bb are not numberical values', function() {
    			assert.equal(undefined, my_calculator("+", 'aa', 'bb'));
    		});
	});	
  
});