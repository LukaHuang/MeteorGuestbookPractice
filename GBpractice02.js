var Posts = new Meteor.Collection("myPosts");

if (Meteor.isClient) {

  Template.main.helpers({
      "posts":Posts.find()
  });
  Template.main.events({
      "submit form":function(e){
        var post = {
          "name":$(e.target).find("[name=username]").val(),
          "text":$(e.target).find("[name=text]").val()
        };
        post._id=Posts.insert(post);
          $(e.target).find("[name=name]").val(""),
          $(e.target).find("[name=text]").val("")

      }
  });

}

if (Meteor.isServer) {
}
