function armazena(){
	

event.preventDefault();

	let senha = document.getElementById("senha").value;
	let email = document.getElementById("email").value;
	let nome = document.getElementById("nome").value;



	db.collection("cadastro").add({
		senha: senha,
		email: email,
		nome:nome
	})

	.then(function(docRef) {
		console.log("armazenado com  sucesso");
		console.log("Documento armazenado com ID: ", docRef.id);
	})
	.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	
}

function armazena_est(){

	event.preventDefault();

	let nome = document.getElementById("nome").value;
	let logradouro = document.getElementById("logradouro").value;
	let bairro = document.getElementById("bairro").value;
	let numero = document.getElementById("numero").value;
	let telefone = document.getElementById("telefone").value;
	let celular = document.getElementById("celular").value;
	let site = document.getElementById("site").value;
	let funcionamento = document.getElementById("funcionamento").value;
	let dias = document.getElementById("dias").value;

	db.collection("estabelecimento").add({
		nome: nome,
		logradouro: logradouro,
		bairro: bairro,
		numero: numero,
		telefone: telefone,
		celular: celular,
		site: site,
		funcionamento: funcionamento,
		dias: dias
	})

	.then(function(docRef) {
		console.log("estabelecimento armezado com  sucesso");
		console.log("Documento armazenado com ID: ", docRef.id);
		window.location.href = "redirecionamento.html";
	})
	.catch(function(error) {
		    console.error("Error adding document: ", error);
		});



}