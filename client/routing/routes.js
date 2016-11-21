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


FlowRouter.route('/foods/edit/:name/:id', {
    name: 'editFood',
    action: function() {
        BlazeLayout.render("appBody", {foodList: 'editFoodsPage', foodUnits:'addFoodUnit' });
    }
});