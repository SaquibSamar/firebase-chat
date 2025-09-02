// ✅ Replace with your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAvqgVXxjRQzuGOAXL6QqVZAQpln0QQLDU",
  authDomain: "chat-app-d28ba.firebaseapp.com",
  projectId: "chat-app-d28ba",
  storageBucket: "chat-app-d28ba.firebasestorage.app",
  messagingSenderId: "586077386758",
  appId: "1:586077386758:web:5bbb605d5672d714122b87",
  measurementId: "G-FQQBFKNHMC"
};
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Send message
function sendMessage() {
  let username = document.getElementById("username").value.trim();
  let message = document.getElementById("message").value.trim();

  if (username && message) {
    db.ref("messages").push({
      name: username,
      text: message
    });
    document.getElementById("message").value = "";
  }
}

// Listen for messages in real-time
db.ref("messages").on("child_added", function(snapshot) {
  let msg = snapshot.val();
  let div = document.createElement("div");
  div.textContent = msg.name + ": " + msg.text;
  document.getElementById("messages").appendChild(div);

  // auto-scroll to latest
  let messagesDiv = document.getElementById("messages");
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
