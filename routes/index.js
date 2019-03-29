// Chargement des module necessaire
var express = require('express');
var router = express.Router();
const mariadb = require('mariadb');


// Declaration des variable
var prix_tesla;
var auteur_tesla;
var date_tesla;
var modele_tesla;
var im_tesla;


var prix_classe_a;
var auteur_classe_a;
var date_classe_a;
var modele_classe_a;
var im_classe_a;


var prix_range;
var auteur_range;
var date_range;
var modele_range;
var im_range;


var reduction;

var acce = new Array();





// -------------------Recupereation BDD-------------------
const host = '192.168.43.108';


//--------------Recuperation Tesla----------------

mariadb.createConnection({
    host: host,
    user: 'monty',
    password: 'some_pass',
    database: "tp_web"
  })
  .then(conn => {
    conn.query('SELECT * FROM Voitures where Modele="Tesla"')
      .then(result => {
        for (row of result) {
          //  console.log(row)
          prix_tesla = row.Prix;
          auteur_tesla = row.Auteur;
          date_tesla = row.Date;
          modele_tesla = row.Modele;
          im_tesla = row.Immatriculation;
        }
      }).catch(result => {
        for (row of result) {
          //  console.log(row)
          prix_tesla = "Erreur BDD";
          auteur_tesla = "Erreur BDD";
          date_tesla = "Erreur BDD";
          modele_tesla = "Erreur BDD";
          im_tesla = "Erreur BDD";
        }
      })
      .then(conn.destroy())

  })

//Recuperation Mercedes BDD

mariadb.createConnection({
    host: host,
    user: 'monty',
    password: 'some_pass',
    database: "tp_web"
  })
  .then(conn => {
    conn.query('SELECT * FROM Voitures where Modele="Mercedes classe A"')
      .then(result => {
        for (row of result) {
          //  console.log(row)
          prix_classe_a = row.Prix;
          auteur_classe_a = row.Auteur;
          date_classe_a = row.Date;
          modele_classe_a = row.Modele;
          im_classe_a = row.Immatriculation;
        }
      }).catch(result => {
        for (row of result) {
          //  console.log(row)
          prix_classe_a = "Erreur BDD";
          auteur_classe_a = "Erreur BDD";
          date_classe_a = "Erreur BDD";
          modele_classe_a = "Erreur BDD";
          im_classe_a = "Erreur BDD";
        }
      })
      .then(conn.destroy())

  })

//Recuperation Range Rover BDD

mariadb.createConnection({
    host: host,
    user: 'monty',
    password: 'some_pass',
    database: "tp_web"
  })
  .then(conn => {
    conn.query('SELECT * FROM Voitures where Modele="Range rover"')
      .then(result => {
        for (row of result) {
          prix_range = row.Prix;
          auteur_range = row.Auteur;
          date_range = row.Date;
          modele_range = row.Modele;
          im_range = row.Immatriculation;
        }
      }).catch(result => {
        for (row of result) {
          //  console.log(row)
          prix_range = "Erreur BDD";
          auteur_range = "Erreur BDD";
          date_range = "Erreur BDD";
          modele_range = "Erreur BDD";
          im_range = "Erreur BDD";
        }
      })
      .then(conn.destroy())

  })


//Recuperation Accessoires
mariadb.createConnection({
    host: host,
    user: 'monty',
    password: 'some_pass',
    database: "tp_web"
  })
  .then(conn => {
    conn.query('SELECT * FROM Accessoires')
      .then(result => {
        for (row of result) {
          //console.log("Table accesoires avant : "+ JSON.stringify(row));
          delete row.IdAccessoires;
          delete row.Photo;
          //  e.log("Table accesoires apres : " + JSON.stringify(row));
          acce.push(" -     " + row.Label + " - " + row.Prix + "€");
        }
        //  console.log(JSON.stringify(acce));

      }).catch(result => {
        for (row of result) {
          //  console.log(row)
          acces = "Erreur BDD";

        }
      })
      .then(conn.destroy())

  })




//Recuperation reduction

mariadb.createConnection({
    host: host,
    user: 'monty',
    password: 'some_pass',
    database: "tp_web"
  })
  .then(conn => {
    conn.query('SELECT MontantReduc FROM Reduction where IdReduction=(MONTH (CURRENT_TIMESTAMP));')
      .then(result => {
        for (row of result) {
          //console.log("Ma reduc" + JSON.stringify(row))
          reduction = row.MontantReduc;
        }
      }).catch(result => {
        for (row of result) {
          //  console.log(row)
          prix_classe_a = "Erreur BDD";
          auteur_classe_a = "Erreur BDD";
          date_classe_a = "Erreur BDD";
          modele_classe_a = "Erreur BDD";
          im_classe_a = "Erreur BDD";
        }
      })
      .then(conn.destroy())

  })







//------------Declaration des routes----------------


router.get('/', function(req, res, next) {
  res.render('index', {
    title: "LocationVoiture",
    modele1: modele_tesla,
    modele2: modele_range,
    modele3: modele_classe_a
  });
});


router.get('/voiture', function(req, res, next) {
  res.render('voiture', {
    title: "LocationVoiture - Voiture",
    modele1: modele_tesla,
    modele2: modele_range,
    modele3: modele_classe_a
  });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: "LocationVoiture - Contact"
  });
});


router.get('/voiture/Tesla', function(req, res, next) {
  res.render('voiture-template', {
    title: "LocationVoiture - Tesla",
    prix: prix_tesla,
    auteur: auteur_tesla,
    date: date_tesla,
    modele: modele_tesla,
    immatriculation: im_tesla,
    obj: acce,
    reduction: reduction

  });
});


router.get('/voiture/Classe_A', function(req, res, next) {
  res.render('voiture-template2', {
    title: "LocationVoiture - Classe A",
    prix: prix_classe_a,
    auteur: auteur_classe_a,
    date: date_classe_a,
    modele: modele_classe_a,
    immatriculation: im_classe_a,
    obj: acce,
    reduction: reduction

  });
});
router.get('/voiture/Range_Rover', function(req, res, next) {
  res.render('voiture-template3', {
    title: "LocationVoiture - Range Rover",
    prix: prix_range,
    auteur: auteur_range,
    date: date_range,
    modele: modele_range,
    immatriculation: im_range,
    obj: acce,
    reduction: reduction
  });
});

router.get('/More', function(req, res, next) {
  res.render('more', {
    title: "LocationVoiture - A propos"
  });
});
module.exports = router;