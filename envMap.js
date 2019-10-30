const firebaseConfig = {
  apiKey: "AIzaSyCLaUYZIQ1FZRCFVuo0hJ1n9lCCTRYZxcE",
  authDomain: "map-acessivel.firebaseapp.com",
  databaseURL: "https://map-acessivel.firebaseio.com",
  projectId: "map-acessivel",
  storageBucket: "",
  messagingSenderId: "173422105879",
  appId: "1:173422105879:web:10d3b57cf14264ea"
};
/*firebase.initializeApp({
  apiKey: "AIzaSyCLaUYZIQ1FZRCFVuo0hJ1n9lCCTRYZxcE",
  authDomain: "map-acessivel.firebaseapp.com",
  projectId: "map-acessivel",
});*/
    firebase.initializeApp(firebaseConfig);
   	var db = firebase.firestore();
    var bd = firebase.auth();

