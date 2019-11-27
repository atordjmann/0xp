var express = require('express');
cors = require('cors')
var app = express();

var OffreController = require('./controllers/OffreController');


//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
];

var corsOptions = {
  origin: function(origin, callback){
        console.log(origin)
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.use(cors(corsOptions));

app.use('/offres', OffreController);

module.exports = app;