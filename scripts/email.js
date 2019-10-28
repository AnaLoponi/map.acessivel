function email(){
	 var nodemailer = require('nodemailer');

	 var transportador = nodemailer.createTransport({
	 	service: 'gmail',
	 	auth: {
	 		user: 'map.acessivel@gmail.com',
	 		password: 'joaoluizana'
	 	}
	 });

	 var configuracoes = {
	 	from: 'Mapeamento Acessível <map.acessivel@gmail.com>',
	 	to: 'João Vitor Dias <joaovitordias92040@gmail.com>',
	 	subjetc: 'Teste E-mail',
	 	text: 'Aqui é um teste bem simples do e-mail. Espero que de certo',
	 	html: '<h1>Contéudo do email em HTML</h1>'
	 };

	 transportador.sendEmail(configuracoes, function(error, info){
	 	if(error){
	 		console.log(error);
	 	}else{
	 		console("Email enviado"+info.response);
	 	}
	 });
}