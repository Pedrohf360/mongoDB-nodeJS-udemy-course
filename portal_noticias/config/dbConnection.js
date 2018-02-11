var mysql = require('mysql');

var connMySQL = function() {	
		console.log('Conexão com BD foi estabelecida.');
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'portal_noticias'
		}); // estrutura JSON (chave: 'valor')
}

module.exports = function () {
	console.log('O autoload carregou o módulo de conexão com o BD');
	return connMySQL;
}