var app = require('../app');
var http = require('http');

var port = "3000"

app.set('port', port);

var server = http.createServer(app);

server.listen(port);
console.log("Le serveur est démarrer sur le port " + port + "!");
