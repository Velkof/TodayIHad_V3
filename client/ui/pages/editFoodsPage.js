import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import {CustomFoodUnits} from '/imports/api/customFoodUnits.js';

import '../components/customFoodUnitOption.js';
import '../components/food.js';
import './editFoodsPage.html';

Template.editFoodsPage.onCreated(function(){
    this.showAddFoodUnit = new ReactiveVar(false);
    Meteor.subscribe('foods');
    Meteor.subscribe('foodsUnits');

    this.autorun(() => {
        var foodId = FlowRouter.getParam('id');
        this.subscribe('foodForEdit', foodId);
    });
});

Template.editFoodsPage.helpers({
    foods() {
        return Foods.find({});
    },
    unitsForCurrentFood() {
        let foodId = FlowRouter.getParam('id');
        return FoodUnits.find({foodId: foodId} );
    },
    'foodForEdit' : function () {
        var foodId = FlowRouter.getParam('id');

        return Foods.findOne({_id: foodId});
    },
    showAddFoodUnit: function(){
        return Template.instance().showAddFoodUnit.get();
    },
    customFoodUnits() {
        return CustomFoodUnits.find({}, { sort: { createdAt: -1 } });
    },
});

Template.editFoodsPage.events({
    'submit .updateFood': function(event){
        var foodId = FlowRouter.getParam('id');

        event.preventDefault();

        const target = event.target;

        const name = target.userFoodName.value;
        const calories = target.userFoodCalories.value;
        const protein = target.userFoodProtein.value;
        const fat = target.userFoodFat.value;
        const carbs = target.userFoodCarbs.value;

        Meteor.call('foods.update', foodId, name, calories, protein, fat, carbs, (err, response) => {
            if (err) {
                console.log(err.reason);
            } else if (response) {
                let foodId = response;

                let foodUnits = FoodUnits.find({foodId: foodId});

                // let cursor = CustomFoodUnits.find();

                // let foodId = response;

                // Meteor.call('foodUnits.insert', "gr", "1", foodId);
                // Meteor.call('foodUnits.insert', "oz", "28.35", foodId);
                //
                // cursor.forEach(function (doc) {
                //     Meteor.call('foodUnits.insert', doc.name, doc.gramWeight, foodId);
                // });
                //
                // cursor.forEach(function(doc){ CustomFoodUnits.remove({_id: doc._id}) });
            }
        });
    },
    'click #addUnit': function(event, template){
        template.showAddFoodUnit.set(true);
    },
    'click #closeBtnAddUnit': function(event, template) {
        event.preventDefault();
        template.showAddFoodUnit.set(false);
    },
    'click .backBtn': function(event) {
        event.preventDefault();
        FlowRouter.go('/foods');
    },
});