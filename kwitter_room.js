//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCm71UEzC_2qW3AGsM1IVlHjApHUZ0RqSI",
      authDomain: "kwitter-f05d4.firebaseapp.com",
      databaseURL: "https://kwitter-f05d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f05d4",
      storageBucket: "kwitter-f05d4.appspot.com",
      messagingSenderId: "1069919890061",
      appId: "1:1069919890061:web:8b385cf5b19cf48a9510c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class+'room_name' id=" + Room_names + " onclick='RedirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function RedirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}