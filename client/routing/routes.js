FlowRouter.route('/app-body', {
   name: 'app-body',
    action(){
        BlazeLayout.render('App-body');
    },

});


FlowRouter.route('/foods', {
    name: 'foods',
    action() {
        BlazeLayout.render('appBody', { page: 'foodsPage', foodUnits:'addFoodUnit' });
    },
});


FlowRouter.route('/foods/:name/:id', {
    name: 'editFood',
    action: function() {
        BlazeLayout.render("appBody", {page: 'editFoodsPage', foodUnits:'addFoodUnit' });
    }
});

FlowRouter.route('/dashboard', {
   name: 'dashboard',
   action: function(){
        BlazeLayout.render('appBody', {page: 'dashboardPage'});
   },
});