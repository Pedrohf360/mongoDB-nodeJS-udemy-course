var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs'); // ejs = motor de geração de views

app.get('/', function(req, res){
	res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render('admin/form_add_noticia'); // não é necessário especificar extensão do arquivo "tecnologia" (ejs).
});

app.get('/noticias', function(req, res){
	res.render('noticias/noticias');
});

app.listen(3000, function(){
	console.log(msg());
});