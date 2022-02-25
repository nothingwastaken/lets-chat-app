var firebaseConfig = {
    apiKey: "AIzaSyBi9O1mI7WpBh30pWMdP9gcfJI7jI4LUrg",
    authDomain: "kwitter-81f25.firebaseapp.com",
    databaseURL: "https://kwitter-81f25-default-rtdb.firebaseio.com",
    projectId: "kwitter-81f25",
    storageBucket: "kwitter-81f25.appspot.com",
    messagingSenderId: "354290113028",
    appId: "1:354290113028:web:2cb6caae3fa5d96620b351",
    measurementId: "G-EMX4TK5CNY"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

usersname = localStorage.getItem("user_name")
roomname = localStorage.getItem("room_name")

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name:usersname,
        message:msg,
        like:0
    })
    document.getElementById("msg").value = "";
}

function updateLike(message_id){
    console.log("clicked on button - " + message_id);
    button_id = message_id
    likes = document.getElementById(button_id).value;
    updatedlikes = Number(likes) +1;
    console.log(updatedlikes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updatedlikes
    })
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}