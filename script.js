// ✅ Your Firebase config (copy from Firebase Console → Project Settings → Web App)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://chat-app-d28ba-default-rtdb.firebaseio.com",
  projectId: "chat-app-d28ba",
  storageBucket: "chat-app-d28ba.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ Send message
function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  db.ref("messages").push({
    name: name,
    text: message
  });

  document.getElementById("message").value = ""; // clear input
}

// ✅ Listen for new messages
db.ref("messages").on("child_added", function(snapshot) {
  const msg = snapshot.val();
  const li = document.createElement("li");
  li.textContent = msg.name + ": " + msg.text;
  document.getElementById("messages").appendChild(li);
});
