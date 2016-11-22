import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const CustomFoodUnits = new Mongo.Collection(null);


Meteor.methods({
    'customFoodUnits.insert' (name, gramWeight) {
        CustomFoodUnits.insert({
            name,
            gramWeight,
        });
    },
    'customFoodUnits.remove' (customFoodUnitId) {
        const customFoodUnit = CustomFoodUnits.findOne(customFoodUnitId);
        CustomFoodUnits.remove(customFoodUnit);
    },
});