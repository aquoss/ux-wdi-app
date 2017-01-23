var express = require('express'),
    bodyParser = require('body-parser');

var db = require('./models');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req,res){
  res.sendFile('views/index.html', {root:__dirname});
})

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

// CREATE ANY NECESSARY ROUTES

app.get('/restaurants', function(req, res){
  db.Restaurant.find({}, function(err, restaurants){
    if(err){
      res.status(500).send('server error');
      return console.log('index error:' + err);
    }
    res.json(restaurants);
  });
});

app.post('/restaurants', function(req,res){
  var newRest = new db.Restaurant(req.body);
  newRest.save(function(err,rest){
    if (err) {console.log('error',err); }
    res.json(rest);
  })
})

app.get('/restaurants/:id', function(req, res){
  db.Restaurant.findOne({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});

app.get('/soup-kitchens', function(req, res){
  db.SoupKitchen.find({}, function(err, kitchens){
    if(err){
      res.status(500).send('server error');
      return console.log('index error:' + err);
    }
    res.json(kitchens);
  });
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening at http://localhost:3000/');
})
