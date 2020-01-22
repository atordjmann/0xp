var express = require('express');
var app             = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

const escapeStringRegexp = require('escape-string-regexp')

router.get('/', function (req, res) {
    console.log("Request /offres/")
    db.collection('offers').find().toArray(function(err, results) {
        expandWithMatching(results);
        res.json(results);
    })
});

router.get('/filtered', function (req, res) {
    console.log("Request /offres/filtered")
    listParamFilter=["type","duration","sector","location","company","isPartner","publicationDate","companySize","start_date","matchingMini","remunMini"]
    query={}
    if(Object.keys(req.query).indexOf("type")>-1){
        query["type"] = new RegExp('^' + escapeStringRegexp(req.query["type"]) + '$', 'i');
    }
    if(Object.keys(req.query).indexOf("duration")>-1){
        query["duration"] = new RegExp('^' + escapeStringRegexp(req.query["duration"]) + '$', 'i');
    }
    if(Object.keys(req.query).indexOf("sector")>-1){
        query["sector"] = new RegExp('^' + escapeStringRegexp(req.query["sector"]) + '$', 'i');
    }
    if(Object.keys(req.query).indexOf("start_date")>-1){
        query["start_date"] = { $gte: req.query["start_date"] }
    }
    if(Object.keys(req.query).indexOf("remunMini")>-1){
        query["remuneration"] = { $gte: +req.query["remunMini"] }
    }
    if(Object.keys(req.query).indexOf("location")>-1){
        locations=req.query["location"].split(";")
        locations.splice(-1,1)
        query["location"] = { $in: locations }
    }
    if(Object.keys(req.query).indexOf("company")>-1){
        companies=req.query["company"].split(";")
        companies.splice(-1,1)
        query["company"] = { $in: companies }
    }
    if(Object.keys(req.query).indexOf("publicationDate")>-1){
        correspondance={
            "today":(new Date()).getTime()-24*60*60*1000,
            "week":(new Date()).getTime()-7*24*60*60*1000,
            "month":(new Date()).getTime()-30*24*60*60*1000
        }
        //On cherche les offres dont la date de publication est en ts supérieure
        query["created_date"] = { $gte: ''+correspondance[req.query["publicationDate"]] }
    }

    if(Object.keys(req.query).indexOf("companySize")>-1){
        // TODO : Aller regarder pour l'entreprise si elle est ou de la bonne taille
    }

    if(Object.keys(req.query).indexOf("isPartner")>-1){
        // TODO : Aller regarder pour l'entreprise si elle est ou non partenaire
    }
    
    db.collection('offers').find(query).toArray(function(err, results) {
        expandWithMatching(results);
        if(Object.keys(req.query).indexOf("matchingMini")>-1){
            resultsFiltered=[]
            results.forEach((offre)=>{
                if (offre.matchingScore>=req.query["matchingMini"]){
                    resultsFiltered.push(offre)
                }
            });
        }
        res.json(resultsFiltered);
    })
});

module.exports = router;

function expandWithMatching(results) {
    results.forEach((offre)=>{
        offre.matchingScore = Math.floor(Math.random()*100);
    })
};