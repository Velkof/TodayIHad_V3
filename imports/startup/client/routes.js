import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/appBody.js';
import '../../ui/pages/foodsPage.js';
import '../../ui/pages/editFoodsPage.js';

import '../../ui/components/food.js';
import '../../ui/components/addFoodUnit.js';


FlowRouter.route('/app-body', {
   name: 'app-body',
    action(){
        BlazeLayout.render('App-body');
    },

});


FlowRouter.route('/foods', {
    name: 'foods',
    action() {
        BlazeLayout.render('appBody', { foodList: 'foodsPage', foodUnits:'addFoodUnit' });
    },
});

// FlowRouter.route('/foods/edit', {
//     name: 'editFoods',
//     action() {
//         BlazeLayout.render('appBody', { foodList: 'editFoodsPage', foodUnits:'addFoodUnit' });
//     },
// });
//
FlowRouter.route('/foods/edit/:name', {
    name: 'editFood',
    action: function() {
        BlazeLayout.render("appBody", {foodList: 'editFoodsPage', foodUnits:'addFoodUnit' });
    }
});