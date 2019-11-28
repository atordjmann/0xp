var express = require('express');
var app             = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', function (req, res) {
    console.log("Getting Routes")
    listOffres = [{
            "title" : "Junior Développeur Full Stack (H/F)",
            "srcImgCompany" : "http://www.portify.fr/wp-content/uploads/2019/07/logo-sopra-steria.png",
            "company" : "Sopra Steria",
            "date" : new Date(),
            "domain" : "IT / Conseil",
            "location" : "Marseille, France",
            "type" : "Stage 4-6 Mois"
        },
        {
            "title" : "Designer UI/UX Web (H/F)",
            "srcImgCompany" : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png",
            "company" : "Alten",
            "date" : new Date(),
            "domain" : "Graphisme / Design",
            "location" : "Paris, France",
            "type" : "Alternance 3 ans"
        },
        {
            "title" : "Designer UI/UX Web (H/F)",
            "srcImgCompany" : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png",
            "company" : "Alten",
            "date" : new Date(),
            "domain" : "Graphisme / Design",
            "location" : "Paris, France",
            "type" : "Alternance 3 ans"
        }]

    res.json(listOffres);
    /*Matiere.getmatieres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });*/
});

/*router.post('/', function (req, res) {
    Matiere.creatematiere(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});*/

module.exports = router;