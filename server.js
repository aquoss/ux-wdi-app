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


app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening at http://localhost:3000/');
})
