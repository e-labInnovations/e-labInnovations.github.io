  const firebaseConfig = {
    apiKey: "AIzaSyDrxtvPCMVHyVKsik8uvyIo64s28heyr3Q",
    authDomain: "e-lab-innovations.firebaseapp.com",
    databaseURL: "https://e-lab-innovations.firebaseio.com",
    projectId: "e-lab-innovations",
    storageBucket: "e-lab-innovations.appspot.com",
    messagingSenderId: "185397314105",
    appId: "1:185397314105:web:1fae2925feb2850a2e43e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  
  messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  const { title, ...options } = payload.notification;
});
