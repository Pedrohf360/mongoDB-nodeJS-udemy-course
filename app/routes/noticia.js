module.exports = function(app) {

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();
		var noticiaModel = new app.app.models.NoticiasDAO(connection);


		noticiaModel.getNoticia(function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});
	});
};