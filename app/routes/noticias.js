//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

	app.get('/noticias', function(req, res)
	{
		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			res.render('noticias/noticias', {noticias: result});
		
		
		}); // SQL: consulta em si;
							// callback: o que vai ser feito após a  consulta ser realizada
		//res.render('noticias/noticias');
	});
};