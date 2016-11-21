import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import {Foods} from '../../api/foods.js';
import {CustomFoodUnits} from '../../api/customFoodUnits.js';

import '../components/customFoodUnitOption.js';
import '../components/food.js';
import './editFoodsPage.html';

Template.editFoodsPage.onCreated(function(){
    this.showAddFoodUnit = new ReactiveVar(false);
    Meteor.subscribe('foods');
});

Template.editFoodsPage.helpers({
    foods() {
        return Foods.find({});
    },
});