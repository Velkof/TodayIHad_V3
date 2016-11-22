import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';


if(Meteor.isServer){
  Meteor.publish('loggedFoods', function loggedFoodsPublication(){
     return LoggedFoods.find({});
  });
};