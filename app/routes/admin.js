module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		//salvarNoticias

		var connection = application.config.dbConnection(); //conexao
		var noticiasModel = application.app.models.noticiasModel; //model

		noticiasModel.salvarNoticia(noticia, connection, function(error, result){
			res.redirect('/noticias');
		});
	});
};