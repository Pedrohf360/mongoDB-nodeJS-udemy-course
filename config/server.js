var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs'); // ejs = motor de geração de views
app.set('views', './app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;

// Como o server exporta uma função que é executada
// pelo app, o caminho é buscada a partir do diretório
// do app.js