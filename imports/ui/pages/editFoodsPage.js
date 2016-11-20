import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import {Foods} from '../../api/foods.js';
import {FoodUnits} from '../../api/foodUnits.js';

import '../components/customFoodUnitOption.js';
import '../components/food.js';
import './editFoodsPage.html';



Template.editFoodsPage.helpers({
    foods(){
      return Foods.find({});
    },
});