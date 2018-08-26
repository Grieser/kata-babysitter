var moment = require('moment');
moment().format();

module.exports = {
    getWage: function(startJob, bedTime, endJob){
        var start = moment(startJob, "HH:mm A");
        var startLimit = moment("5:00 PM", "HH:mm A");
        if (start.isBefore(startLimit)) {
            return "Error";
        }
        return "$0";
    }
}