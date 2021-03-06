/*var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});*/

var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var PORT = 3000;

const MongoClient = require('mongodb').MongoClient

//CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// custom routes
var OffreController = require('./controllers/OffreController');

// Set our routes
app.use('/offres', OffreController);

// Handle 404
app.use(function(req, res) {
    //res.send('404: Page not Found', 404);
    res.status(404).send({status:404, message: '404 Not Found', type:'client'});
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500).send({status:500, message: 'internal error', type:'internal'});
});

//listen
const uri = "mongodb+srv://admin0xp:mdpadmin0xp@0xp-aqxy3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect( err => {
    if (err) return console.log(err)
    db = client.db('0xpDB')
    var httpServer = http.createServer(app);
    httpServer.listen(PORT, () => console.log(`API running on localhost:${PORT}`));
})
/*var httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log(`API running on localhost:${PORT}`));*/