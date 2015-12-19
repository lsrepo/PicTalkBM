if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    images: [{
      "Kategori": "Health",
      "Swedish": "Plåster",
      "Arabic": "بلاستر , لاصق طبي ",
      "English": "Band aid",
      "URL": "http://bildstod.se/image/get/7869",
      "File": "images/band_aid.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Öl",
      "Arabic": "بيرة",
      "English": "Beer",
      "URL": "http://bildstod.se/image/get/2769",
      "File": "images/beer.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Cykel",
      "Arabic": "دراجة",
      "English": "Bicycle",
      "URL": "http://bildstod.se/image/get/2702",
      "File": "images/bicycle.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Barn",
      "Arabic": "أولاد",
      "English": "Children",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-boys_2.png",
      "File": "images/children.png"
    }]
  });
}


if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
