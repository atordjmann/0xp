var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID
router.use(bodyParser.json());
var mongoose = require('mongoose');

router.get('/softskills/', function (req, res) {
    db.collection('softskills').find().toArray(function (err, results) {
        res.json(results);
    })
});

router.get('/domaines/', function (req, res) {
    db.collection('domaines').find().toArray(function (err, results) {
        res.json(results);
    })
});

router.get('/sectors/', function (req, res) {
    db.collection('sectors').find().toArray(function (err, results) {
        res.json(results);
    })
});

module.exports = router;