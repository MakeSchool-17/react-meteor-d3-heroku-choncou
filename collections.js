/**
 * Created by choncou on 1/21/16.
 */
Hours = new Meteor.Collection("Hours");

Meteor.methods({

    insertHour: function(hours, date) {
        check(hours, Number);
        check(date, Date)
        return Hours.insert({
            date: date,
            hours: hours
        });
    },
    removeHour: function(id){
        check(id, String)
        return Hours.remove(id);
    }
});