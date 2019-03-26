var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var http = require("http");
var app = express();

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require("./routes")(app);

app.use(function(req, res, next) {
  var err = new Error('Erreur 404!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message
  });
});
module.exports = app;
