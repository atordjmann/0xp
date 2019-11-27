var express = require('express');
var app             = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', function (req, res) {
    listOffres = {
        "title" : "Junior Développeur Full Stack (H/F)",
        "srcImgCompany" : "http://www.portify.fr/wp-content/uploads/2019/07/logo-sopra-steria.png",
        "company" : "Sopra Steria",
        "date" : new Date(),
        "domain" : "IT / Conseil",
        "location" : "Marseille, France",
        "type" : "Stage 4-6 Mois"
    }

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