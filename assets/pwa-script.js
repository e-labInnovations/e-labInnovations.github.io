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
  
if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        console.log("An active service worker found, no need to register");
      } else {
        // Register the service worker
        navigator.serviceWorker
          .register("/serviceworker.js", {
            scope: "./"
          })
          .then(function (reg) {
            messaging.useServiceWorker(reg);
            console.log("Service worker has been registered for scope: " + reg.scope);
              
            messaging
              .requestPermission()
              .then(() => {
                //message.innerHTML = "Notifications allowed";
                console.log("Notifications allowed");
                return messaging.getToken();
              })
              .then(token => {
                //tokenString.innerHTML = "Token Is : " + token;
                console.log("Token Is : " + token);
              })
              .catch(err => {
                //errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
                console.log("No permission to send push", err);
              });
          })
          .catch(error => {
            console.log("Service worker error");
            console.log(error);
          });
      }
} else {
      alert("Service worker not working")
}
