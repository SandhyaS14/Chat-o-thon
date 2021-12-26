var firebaseConfig = {
    apiKey: "AIzaSyDKiNAQI-1rkM92WNb4vrHSW4YBnqyZZRU",
    authDomain: "kwitter-updated-ec89c.firebaseapp.com",
    databaseURL: "https://kwitter-updated-ec89c-default-rtdb.firebaseio.com",
    projectId: "kwitter-updated-ec89c",
    storageBucket: "kwitter-updated-ec89c.appspot.com",
    messagingSenderId: "851663655688",
    appId: "1:851663655688:web:30704e8a24b02ecde392bd"
  };
  
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          msg: msg,
          like: 0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}