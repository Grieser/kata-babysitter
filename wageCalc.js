var moment = require('moment');
moment().format();

module.exports = {
    getWage: function(startJob, bedTime, endJob){
        var start = moment(startJob, "HH:mm A");
        var end = moment(endJob, "HH:mm A");
        var startLimit = moment("5:00 PM", "HH:mm A");
        var endLimit = moment("4:00 AM", "HH:mm A");
        if (start.isBefore(startLimit) || end.isAfter(endLimit)) {
            return "Error";
        }
        return "$0";
    }
}