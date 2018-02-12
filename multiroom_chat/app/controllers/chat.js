module.exports.iniciaChat = function(application, req, res){

	req.assert('apelido', 'Nome ou apelido é obrigatório!').notEmpty();
	req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres!').len(3,15);

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao : erros}); // Finaliza processamento.
		return; // Por precaução.
	}

	res.render('chat');
}