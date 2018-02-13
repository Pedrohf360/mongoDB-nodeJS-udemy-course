/* import as configurações do servidor */

var app = require('./config/server');

/* parametrizar a porta de escuta */

var server = app.listen(80, function(){
	console.log('Servidor online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */

io.on('connection', function(socket){
	console.log('Usuário conectou!');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){

		/* dialogo */
		socket.emit( // Aparece p/ quem enviou
				'msgParaCliente', {
					apelido: data.apelido,
					mensagem: data.mensagem});

		socket.broadcast.emit( // Envia para todos
				'msgParaCliente', {
					apelido: data.apelido,
					mensagem: data.mensagem});

		/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit( // Aparece p/ quem enviou
					'participantesParaClientes', {
						apelido: data.apelido});

			socket.broadcast.emit( // Envia para todos
					'participantesParaClientes', {
						apelido: data.apelido});
		}

	});
});