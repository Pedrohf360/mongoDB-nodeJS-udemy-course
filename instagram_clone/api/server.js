var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();

// iniciando middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

console.log('Estou escutando a porta: ', port);

app.get('/', function(req, res) {

    
    res.send({msg: 'olá'});
});