module.exports = function() {
app.get('/formulario_inclusao_noticia', function(req, res){
	res.render('admin/form_add_noticia'); // não é necessário especificar extensão do arquivo "tecnologia" (ejs).
});
};