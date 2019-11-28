var express = require('express');
var app             = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

const escapeStringRegexp = require('escape-string-regexp')

router.get('/', function (req, res) {
    console.log("Request /offres")
    db.collection('offers').find().toArray(function(err, results) {
        res.json(results);
    })
});

router.get('/filtered', function (req, res) {
    console.log("Request /offres/filtered")
    listParamFilter=["type", "domain"]
    query={}
    Object.keys(req.query).forEach( param => {
        //Au cas ou quelqu'un s'amuse à rajouter des paramètres, un peu inutile mais toujours sympa
        if (listParamFilter.indexOf(param)!=-1){
            query[param] = new RegExp('^' + escapeStringRegexp(req.query[param]) + '$', 'i');
        }
    })

    db.collection('offers').find(query).toArray(function(err, results) {
        res.json(results);
    })
});

module.exports = router;