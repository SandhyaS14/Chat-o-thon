var firebaseConfig = {
  apiKey: "AIzaSyDzfEwinSFPyDIgwn3sSYk53X3iIWIhm0Y",
  authDomain: "chat-o-thon-d2522.firebaseapp.com",
  databaseURL: "https://chat-o-thon-d2522-default-rtdb.firebaseio.com",
  projectId: "chat-o-thon-d2522",
  storageBucket: "chat-o-thon-d2522.appspot.com",
  messagingSenderId: "240898878886",
  appId: "1:240898878886:web:313adb37702d683f427367"
};

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom() {
  roomname = document.getElementById("room_name").value;

  firebase.database().ref("/").child(roomname).update({
        purpose: "adding room"
  });
  localStorage.setItem("roomname", roomname);
  window.location = "chatpage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Roomname - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function logout() {
  window.location = "index.html";
}