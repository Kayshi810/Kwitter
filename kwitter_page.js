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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
