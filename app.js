var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("<html><head><meta charset=\"UTF-8\"/></head><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function(req, res){
	res.send('<html><head><meta charset=\"UTF-8\"/></head><body>Portal de Tecnologia</body></html>');
});

app.get('/moda', function(req, res){
	res.send('<html><head><meta charset=\"UTF-8\"/></head><body>Portal de Moda</body></html>');
});

app.listen(3000, function(){
	console.log('Servidor rodando com Express');
});