module.exports.noticias = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
	res.render('noticias/noticias', {noticias: result});
	
	}); // SQL: consulta em si;
							// callback: o que vai ser feito após a  consulta ser realizada
		//res.render('noticias/noticias');
}

module.exports.noticia = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiaModel = new application.app.models.NoticiasDAO(connection);

	noticiaModel.getNoticia(function(error, result){
		res.render('noticias/noticia', {noticia: result});
	});
}