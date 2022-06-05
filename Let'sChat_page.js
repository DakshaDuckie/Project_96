//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDuZ0a3vWOnYcrOmCkzrcJntCJ7z6ava6g",
    authDomain: "letschat-web-app-7966b.firebaseapp.com",
    databaseURL: "https://letschat-web-app-7966b-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-7966b",
    storageBucket: "letschat-web-app-7966b.appspot.com",
    messagingSenderId: "331298027926",
    appId: "1:331298027926:web:7d9b5a48e2365abf71c5b7",
    measurementId: "G-LPZWP6BCT4"
  };
  firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "index.html";
}

var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("username");
function sendMessage() {
    var message = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          like:0,
          message: message,
          name: user_name
    });
    document.getElementById("message").value="";
}