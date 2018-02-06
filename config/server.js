var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); // ejs = motor de geração de views
app.set('views', './app/views');

// Body-parser = middleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;

// Como o server exporta uma função que é executada
// pelo app, o caminho é buscada a partir do diretório
// do app.js