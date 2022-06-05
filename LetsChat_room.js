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

function addRoom() {
  var room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding the room's name"
  });
  window.location = "Let'sChat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room names = " + Room_names);
        var row = "<div id= " + Room_names + " onclick='redirectToRoomName(this.id)' class='room_name'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML = row;
        //End code
      });
    });
}



getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room name", name);
  window.location = "Let'sChat_page.html";
}
