module.exports = function(app) {

	app.get('/noticias', function(req, res)
	{
		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'portal_noticias'
		}); // estrutura JSON (chave: 'valor')

		connection.query('select * from noticias', function(error, result){
			res.send(result);
		}); // SQL: consulta em si;
							// callback: o que vai ser feito após a  consulta ser realizada

		//res.render('noticias/noticias');
	});
};