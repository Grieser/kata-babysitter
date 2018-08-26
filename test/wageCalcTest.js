var assert = require('chai').assert;
var getWage = require('../wageCalc');

describe('wageCalc', function(){
    it('getWage should return a string', function() {
        let result = getWage.getWage('5:00 PM', '7:00 PM', '9:00 PM');
        assert.typeOf(result, "string");
    })

    it('Start Time should not be before 5:00 PM', function() {
        let result = getWage.getWage('4:59 PM', '7:00 PM', '9:00 PM');
        assert.equal( result, 'Error');
    })

    it('Ending time should not be after 4:00 AM', function(){
        let result = getWage.getWage('5:00 PM', '7:00 PM', "4:01 AM")
        assert.equal(result, "Error");
    })

    it('calcStartToBedTime should return 24 for 2 hours of work before bed', function() {
        let result = getWage.calcStartToBedTime("5:00 PM", "7:00 PM");
        assert.equal(result, 24);
    })

    it('calcStartToBedTime should return 84 for 7 hours of work even if bedtime is after midnight', function(){
        let result = getWage.calcStartToBedTime("5:00 PM", "2:00 AM");
        assert.equal(result, 84);
    })

});