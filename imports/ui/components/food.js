import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './food.html';

Template.food.helpers({
    pathForFood: function(){
        var food = this;

        var params = {name: food.name}
        var routeName = "editFood";

        var path =  FlowRouter.path(routeName, params);

        return path;
    },
});

Template.food.events({
    'click .deleteFood'(){
      Meteor.call('foods.remove', this._id);

      Meteor.call('foodUnits.remove', this._id);
    },
});