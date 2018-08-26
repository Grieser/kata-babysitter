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

    it('calcWage should return 24 for 2 hours of work before bed', function() {
        let result = getWage.calcWage("5:00 PM", "7:00 PM", 12);
        assert.equal(result, 24);
    })

    it('calcWage should return 84 for 7 hours of work even if bedtime is after midnight', function(){
        let result = getWage.calcWage("5:00 PM", "2:00 AM", 12);
        assert.equal(result, 84);
    })

    it('calcWage should return 16 for 2 hours of work after bedtime', function(){
        let result = getWage.calcWage("7:00 PM" , "9:00 PM", 8 );
        assert.equal(result, 16);
    })

    it('calcWage should return 40 for 5 hours of after bedtime work even if job ends after midnight', function(){
        let result = getWage.calcWage("7:00 PM", "3:00", 8);
        assert.equal(result, 40);
    })

    it ('getWage should return $40 for 4 hours of work if start, bedtime and end time are all two hours apart and ends before midnight', function(){
        let result = getWage.getWage("5:00 PM", "7:00 PM", "9:00 PM");
        assert.equal(result, "$40");
    })

    it ('getWage should return $108 for 3 hours of work before bed time, 3 hours of work after bed time until midnight, and 3 hours after midnight', function(){
        let result = getWage.getWage("6:00 PM", "9:00 PM", "3:00 AM");
        assert.equal(result, "$108");
    })

});