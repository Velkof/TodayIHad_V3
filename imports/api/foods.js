/**
 * Created by Marjan on 14/11/2016.
 */
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Foods = new Mongo.Collection('foods');


Meteor.methods({
    'foods.insert' ( name, calories, protein, fat, carbs) {
        check(name, String);

        return Foods.insert({
                    name,
                    calories,
                    protein,
                    fat,
                    carbs,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });

    },
    'foods.remove' (foodId) {
        const food = Foods.findOne(foodId);
        Foods.remove(food);
    },
});