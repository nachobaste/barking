Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('spots');}
});

Router.route('/', {name: 'spotsList'});

Router.route('/spots/:_id', {
  name: 'spotPage',
  data: function() { return Spots.findOne(this.params._id); }
});
