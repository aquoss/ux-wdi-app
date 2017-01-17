var express = require('express'),
    bodyParser = require('body-parser');

var db = require('./models');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

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
    res.json(restaurants)
  });
});

// app.post('/request', function(req, res){
//   db.
// })


app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening at http://localhost:3000/');
})
