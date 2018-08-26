var assert = require('chai').assert;
var getWage = require('../wageCalc');

describe('wageCalc', function(){
    it('getWage should return a string', function() {
        let result = getWage.getWage('5:00 PM', '7:00 PM', '9:00 PM');
        assert.typeOf(result, "string");
    })
});