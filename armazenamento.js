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

	db.collection("users").add({
    first: "Adaaaaaaa",
    last: "Lovelace",
    born: 1815
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		})
		

	
	


	
}