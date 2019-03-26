var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {
        title: "LocationVoiture"
    });
});
router.get('/voiture', function(req, res, next) {
    res.render('voiture', {
        title: "LocationVoiture - Voiture"
    });
});
router.get('/voiture/VoitureTemplate', function(req, res, next) {
    res.render('voiture-template', {
        title: "LocationVoiture - VoituresTemplate"
    });
});

router.get('/More', function(req, res, next) {
    res.render('more', {
        title: "LocationVoiture - A propos"
    });
});
module.exports = router;
