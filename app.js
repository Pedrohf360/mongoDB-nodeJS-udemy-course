var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // ejs = motor de geração de views

app.get('/', function(req, res){
	res.send("<html><head><meta charset=\"UTF-8\"/></head><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function(req, res){
	res.render('secao/tecnologia'); // não é necessário especificar extensão do arquivo "tecnologia" (ejs).
});

app.get('/moda', function(req, res){
	res.send('<html><head><meta charset=\"UTF-8\"/></head><body>Portal de Moda</body></html>');
});

app.listen(3000, function(){
	console.log('Servidor rodando com Express');
});