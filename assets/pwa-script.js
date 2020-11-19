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
