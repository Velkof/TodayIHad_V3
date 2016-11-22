// "change #yearpicker": function(evt) {
//     var newValue = $(evt.target).val();
//     var oldValue = Session.get("year_id");
//     if (newValue != oldValue) {
//         // value changed, let's do something
//     }
//     Session.set("year_id", newValue);
// }

import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';


Template.dashboardPage.onCreated(function(){
    Meteor.subscribe('foods');

});


Template.dashboardPage.helpers({

});

Template.dashboardPage.events({
   'change #foodSearchBox': function(){



   },
});
