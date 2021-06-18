
 var firebaseConfig = {
    apiKey: "AIzaSyCAzZ85PYFvXp_Ev0SnoFloRTu97FjyUrQ",
    authDomain: "kwitter-web-app-add7a.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-add7a-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-add7a",
    storageBucket: "kwitter-web-app-add7a.appspot.com",
    messagingSenderId: "188338465085",
    appId: "1:188338465085:web:56a60048dd6d58df16bd54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!"; 

  function addRoom()
  {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Names: " + Room_names);
     row = "<div class='room_name' id=" + Room_names + " onclick='RedirectToRoom(this.id)'> #" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();

function RedirectToRoom(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
