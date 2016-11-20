import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


import {CustomFoodUnits} from '../../api/customFoodUnits.js';

import './customFoodUnit.js';
import './addFoodUnit.html';

Template.addFoodUnit.helpers({
    customFoodUnits() {
        return CustomFoodUnits.find({}, { sort: { createdAt: -1 } });
    },
});

Template.addFoodUnit.events({
    'submit .addCustomFoodUnit': function(event) {
      event.preventDefault();

      const target = event.target;
      const name = target.name.value;

      const gramWeight = target.gramWeight.value;

      Meteor.call('customFoodUnits.insert', name, gramWeight);

      target.name.value = "";
      target.gramWeight.value = "";
    },
    'click .deleteFoodUnit': function(event){
        Meteor.call('customFoodUnits.remove', this._id);
    },
});


