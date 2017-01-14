var db = require('./models');

var restaurantList =[];
restaurantList.push({
              name: 'Cuisine of Nepal',
              mealType: ['Lunch','Dinner'],
              address: '3486 Mission St San Francisco, CA 94110',
              phone: '(415) 647-2222',
              contact: 'Not Specified',
              yelp: 'https://www.yelp.com/biz/cuisine-of-nepal-san-francisco',
              website: 'http://www.cuisineofnepal.com/',
              menu: 'http://www.cuisineofnepal.com/',
              image: 'https://s3-media1.fl.yelpcdn.com/bphoto/qEadeS00swS7MysgemJX5Q/o.jpg',
              facebook: 'Not provided'
            });
restaurantList.push({
              name: 'B Patisserie',
              mealType: ['Breakfast','Lunch'],
              address: '2821 California St San Francisco, CA 94115',
              phone: '(415) 440-1700',
              contact: 'Not Specified',
              yelp: 'https://www.yelp.com/biz/b-patisserie-san-francisco-2',
              website: 'http://bpatisserie.com/',
              menu: 'http://bpatisserie.com/menu/',
              image: 'https://s3-media3.fl.yelpcdn.com/bphoto/Fq53QMzcYBQwqM_xVfw7RA/o.jpg',
              facebook: 'https://www.facebook.com/b.patisserie'
            });
restaurantList.push({
              name: 'The Brick Yard',
              mealType: ['Breakfast', 'Lunch', 'Dinner'],
              address: '1787 Union St San Francisco, CA 94123',
              phone: '(415) 400-4712',
              contact: 'Not Specified',
              yelp: 'https://www.yelp.com/biz/the-brick-yard-restaurant-and-bar-san-francisco',
              website: 'http://brickyardsf.com/',
              menu: 'http://brickyardsf.com/menu/',
              image: 'https://s3-media4.fl.yelpcdn.com/bphoto/arcvPUvp2Tkk8lmjwlHJVw/o.jpg',
              facebook: 'Not Provided'
            });



db.Restaurant.remove({}, function(err, restaurants){

  db.Restaurant.create(restaurantList, function(err, restaurants){
    if (err) { return console.log('ERROR', err); }
    console.log("all restaurants:", restaurants);
    process.exit();
  });

});
