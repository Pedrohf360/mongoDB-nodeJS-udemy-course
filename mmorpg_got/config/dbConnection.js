// Importar o mongodb
var mongo = require('mongodb');

var connMongoDb = function() {

    console.log('Entrou na função de conexão.');

    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            8080,
            {}
        ),
        {}
    );

    return db;
}

module.exports = function() {
    return connMongoDb;
}