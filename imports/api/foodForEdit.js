import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';

// import {Foods} from './foods.js';


if(Meteor.isServer){

    Meteor.publish('foodForEdit', function (foodId) {
        check(foodId, String);

        return Foods.find({ _id : foodId });
    });
};