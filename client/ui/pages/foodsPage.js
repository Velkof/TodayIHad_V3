import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import {CustomFoodUnits} from '/imports/api/customFoodUnits.js';

import '../components/customFoodUnitOption.js';
import '../components/food.js';
import './foodsPage.html';

Template.foodsPage.onCreated(function(){
    this.showAddFoodUnit = new ReactiveVar(false);
    Meteor.subscribe('foods');
});

Template.foodsPage.helpers({
    foods() {
        return Foods.find({});
    },
    showAddFoodUnit: function(){
        return Template.instance().showAddFoodUnit.get();
    },
    customFoodUnits() {
        return CustomFoodUnits.find({}, { sort: { createdAt: -1 } });
    },
});



Template.foodsPage.events({
    'submit .createFood': function (event) {
        event.preventDefault();

        const target = event.target;
        const name = target.userFoodName.value;
        const calories = target.userFoodCalories.value;
        const protein = target.userFoodProtein.value;
        const fat = target.userFoodFat.value;
        const carbs = target.userFoodCarbs.value;

        Meteor.call('foods.insert', name, calories, protein, fat, carbs, (err, response) => {
            if (err) {
                console.log(err.reason);
            } else if (response) {

                let cursor = CustomFoodUnits.find();

                let foodId = response;

                Meteor.call('foodUnits.insert', "gr", "1", foodId);
                Meteor.call('foodUnits.insert', "oz", "28.35", foodId);

                cursor.forEach(function (doc) {
                    Meteor.call('foodUnits.insert', doc.name, doc.gramWeight, foodId);

                });

                cursor.forEach(function(doc){ CustomFoodUnits.remove({_id: doc._id}) });
            }
        });

        target.userFoodName.value = '';
        target.userFoodCalories.value = '';
        target.userFoodProtein.value = '';
        target.userFoodFat.value = '';
        target.userFoodCarbs.value = '';

    },
    'click #addUnit': function(event, template){
        template.showAddFoodUnit.set(true);
    },
    'click #closeBtnAddUnit': function(event, template) {
        event.preventDefault();
        template.showAddFoodUnit.set(false);
    },
});