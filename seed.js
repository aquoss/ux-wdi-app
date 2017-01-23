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

var kitchenList = [];
kitchenList.push({
              name: 'San Francisco Food Bank',
              address: '900 Pennsylvania Ave, San Francisco, CA 94107',
              phone: '(415) 282-1900',
              hours: 'M-F: 8am-5pm, Sat/Sun: 9am-3:30pm',
              location: {lat: 37.7544354, lng:-122.3935173}
            });
kitchenList.push({
              name: 'Project Open Hand',
              address: '730 Polk St, San Francisco, CA 94109',
              phone: '(415) 447-2300',
              hours: 'Tues: 9am-4pm, Wed-Sat: 11am-4pm',
              location: {lat: 37.7837976, lng:-122.4280263}
            });
kitchenList.push({
              name: 'North Peninsula Food Pantry',
              address: '31 Bepler St, Daly City, CA 94014',
              phone: '(650) 994-5150',
              hours: 'Mon, Tues, Thurs: 3-5:30pm',
              location: {lat: 37.7065506, lng:-122.47076}
            });
kitchenList.push({
              name: 'St. Anthony Foundation',
              address: '150 Golden Gate Ave, San Francisco, CA 94102',
              phone: '(415) 241-2600',
              hours: 'call to inquire',
              location: {lat: 37.7866977, lng:-122.4184426}
            });
kitchenList.push({
              name: 'North Beach Citizens',
              address: '1034 Kearny St, San Francisco, CA 94133',
              phone: '(415) 772-0918',
              hours: 'M-Sat: 9:30am-12pm',
              location: {lat: 37.7974611, lng:-122.4054017}
            });
kitchenList.push({
              name: 'California Association of Food Banks',
              address: '1624 Franklin St #722, Oakland, CA 94612',
              phone: '(510) 272-4435',
              hours: 'Tues-Sat: 10am-5pm',
              location: {lat: 37.8058038, lng:-122.2684058}
            });

db.SoupKitchen.remove({}, function(err, kitchens){

  db.SoupKitchen.create(kitchenList, function(err, kitchens){
    if (err) { return console.log('ERROR', err); }
    console.log("all soup-kitchens:", kitchens);
    process.exit();
  });

});
