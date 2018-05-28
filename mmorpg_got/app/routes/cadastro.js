module.exports = function (application) {
    application.get('/cadastro', function (req, res) {
        application.app.controllers.cadastro.cadastro(application, req, res);
    });

    application.get('/cadastrar', function (req, res) {
        application.app.controllers.cadastro.cadastro(application, req, res);
    });
}