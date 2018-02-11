module.exports = function(application){
	application.post('/chat', function(req, res){
		res.render('chat');
	});
}

module.exports = function(application){
	application.get('/chat', function(req, res){
		res.render('chat');
	});
}