import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const FoodUnits = new Mongo.Collection('foodUnits');


Meteor.methods({
    'foodUnits.insert' (name, gramWeight, foodId) {

        FoodUnits.insert({
            name,
            gramWeight,
            foodId,
        });

    },
    'foodUnits.remove' (foodId) {

        let cursor = FoodUnits.find( { foodId: foodId } );

        cursor.forEach(function(doc){
            FoodUnits.remove({foodId: doc.foodId});
        });
    },
});