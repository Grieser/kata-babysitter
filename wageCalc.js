var moment = require('moment');
moment().format();

var self = module.exports = {
    getWage: function(startJob, bedTime, endJob){
        var start = moment(startJob, "HH:mm A");
        var end = moment(endJob, "HH:mm A");
        var startLimit = moment("5:00 PM", "HH:mm A");
        var endLimit = moment("4:00 AM", "HH:mm A");
        if (start.isBefore(startLimit) || end.isAfter(endLimit) && end.isBefore(startLimit)) {
            return "Error";
        }
        var startWage = self.calcStartToMidnight(start, bedTime, 12);
        var AfterBedWage = self.calcStartToMidnight(bedTime, end, 8);
        var midNight = moment("00:00 AM", "HH:mm A");
        if (end.isAfter(midNight) && end.isBefore(start)) {
            var AfterMidNightWage = (end.format("HH") - midNight.format("HH")) * 16; 
        } else { 
            var AfterMidNightWage = 0;
        }
        var total = startWage + AfterBedWage + AfterMidNightWage;
        return "$" + total;
    },
    calcStartToMidnight: function(startTime, endTime, rate) {
        var start = moment(startTime, "HH:mm A");
        var end = moment(endTime, "HH:mm A");
        var midNight = moment("00:00 AM", "HH:mm A");
        if (end.isAfter(midNight) && end.isBefore(start)) {
            var total = (24 - start.format("HH")) * rate;
        } else {
            var total = (end.format("HH") - start.format("HH")) * rate;
        }
        return total;
    }
}