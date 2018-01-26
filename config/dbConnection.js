var mysql = require('mysql');

module.exports = function() {	
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'portal_noticias'
		}); // estrutura JSON (chave: 'valor')
}