// Importar o mongodb
var mongo = require("mongodb").MongoClient;
var assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "got";

var connMongoDB = function (dados) {
    mongo.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        query(db, dados);
        client.close();
    });
};
function query(db, dados, req, res) {
    var collection = db.collection(dados.collection);
    switch (dados.operacao) {
        case "inserir":
            collection.insertOne(dados.usuario, dados.callback);
            break;
        case "buscar":
            collection.find(dados.usuario).toArray(function(err, result){
                console.log('RESULT:', result);
            }); // Os parâmetros de busca são iguais aos recebidos por parâmetro neste método.
                              // dados.usuario = {usuario: dados.usuario.usuario, senha: dados.usuario.senha}
            if (result && result[0] != undefined) {
                req.session.autorizado = true;
            }

            if (req.session.autorizado) {
                res.send('usuário foi encontrado no banco de dados');
            } else {
                res.send('usuário não existe no banco de dados');
            }
            break;
        default:
            break;
    };
}

module.exports = function () {
    return connMongoDB;
};