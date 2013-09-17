Test = new Meteor.Collection('Test');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to neOp.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Test.remove({});
    Test.insert({_id: "XJAGgP3whnNd2HZec"}) ;
    Test.insert({_id: "user1"} );
    Test.insert({_id: "user8"} );
    Test.insert({_id: "user5"}) ;

    Test.update({_id: "XJAGgP3whnNd2HZec"}, {
    $push: { users:{name8: "test5"}} });
    Test.update({_id: "user5"}, {
    $push: { users:{name8: "test5"}} });
    Test.update({_id: "user8"}, {
    $push: { users:{name9: "test5"}} });
    Test.update({_id: "user1"}, {
    $push: { users:{name9: "test4"}} });
  });
}
