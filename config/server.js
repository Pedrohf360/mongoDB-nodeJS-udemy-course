var express = require('express');
var app = express();
app.set('view engine', 'ejs'); // ejs = motor de geração de views
app.set('views', './app/views');

module.exports = app;