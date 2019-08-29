const firebaseConfig = {
  apiKey: "AIzaSyCLaUYZIQ1FZRCFVuo0hJ1n9lCCTRYZxcE",
  authDomain: "map-acessivel.firebaseapp.com",
  databaseURL: "https://map-acessivel.firebaseio.com",
  projectId: "map-acessivel",
  storageBucket: "map-acessivel.appspot.com",
  messagingSenderId: "173422105879",
  appId: "1:173422105879:web:10d3b57cf14264ea"
};

map_firebase = firebase.initializeApp(firebaseConfig);
console.log(map_firebase);
var db = firebase.firestore();


//let db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
