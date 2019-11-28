var express = require('express');
var app             = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', function (req, res) {
    console.log("Getting Routes")
    db.collection('offers').find().toArray(function(err, results) {
        res.json(results);
    })
});

module.exports = router;