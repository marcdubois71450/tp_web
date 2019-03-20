var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {
        title: "LocationVoiture"
    });
});
router.get('/voiture', function(req, res, next) {
    res.render('voiture', {
        title: "LocationVoiture"
    });
});
module.exports = router;
