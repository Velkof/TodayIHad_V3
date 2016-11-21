import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/customFoodUnitOption.js';
import '../components/food.js';
import './editFoodsPage.html';

Template.editFoodsPage.onCreated(function(){
    this.showAddFoodUnit = new ReactiveVar(false);
    Meteor.subscribe('foods');

    this.autorun(() => {
        var foodId = FlowRouter.getParam('id');
        this.subscribe('foodForEdit', foodId);
    });


});

Template.editFoodsPage.helpers({
    foods() {
        return Foods.find({});
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

        Meteor.call('foods.update', foodId, name, calories, protein, fat, carbs);




    },
    'click #addUnit': function(event, template){
        template.showAddFoodUnit.set(true);
    },
    'click #closeBtnAddUnit': function(event, template) {
        event.preventDefault();
        template.showAddFoodUnit.set(false);
    },
});