import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './food.html';

Template.food.events({
    'click .deleteFood'(){
      Meteor.call('foods.remove', this._id);

      Meteor.call('foodUnits.remove', this._id);
    },
});