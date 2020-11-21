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

const messaging = firebase.messaging(),
      pushBtn   = document.getElementById('push-button');

let userToken    = null,
    isSubscribed = false;

window.addEventListener('load', () => {
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
             messaging.useServiceWorker(reg)
             initializePush()
             console.log("Service worker has been registered for scope: " + reg.scope);
           })
           .catch(error => {
             console.log("Service worker error");
             console.log(error);
           });
       }
 } else {
       alert("Service worker not working")
 }
 
 initializePush();
 if (!isSubscribed)
    subscribeUser()
});


function initializePush() {
    userToken = localStorage.getItem('pushToken')

    isSubscribed = userToken !== null
    updateBtn()

    pushBtn.addEventListener('click', () => {
        pushBtn.disabled = true

        if (isSubscribed) return unsubscribeUser()

        return subscribeUser()
    })
}

function updateBtn() {
    if (Notification.permission === 'denied') {
        pushBtn.textContent = 'Subscription blocked'
        return
    }

    pushBtn.textContent = isSubscribed ? 'Unsubscribe' : 'Subscribe'
    pushBtn.disabled = false
}

function subscribeUser() {
    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then(token => {

            updateSubscriptionOnServer(token)
            isSubscribed = true
            userToken = token
            localStorage.setItem('pushToken', token)
            updateBtn()
        })
        .catch(err => console.log('Denied', err))
}

function updateSubscriptionOnServer(token) {
    if (isSubscribed) {
        return axios.post('https://script.google.com/macros/s/AKfycby3wkwLKaCbQZmMbrwZzC8hEMbEDKbfR9WF_ufD2sXG9fk0FTS4/exec', {
            action: 'Unsubscribe',
            token: token
        })
        .then(function (response) {
            localStorage.setItem('subscribed', true)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    axios.post('https://script.google.com/macros/s/AKfycby3wkwLKaCbQZmMbrwZzC8hEMbEDKbfR9WF_ufD2sXG9fk0FTS4/exec', {
        action: 'Subscribe',
        token: token
    })
    .then(function (response) {
        localStorage.setItem('subscribed', false)
    })
    .catch(function (error) {
        console.log(error);
    });
}

function unsubscribeUser() {
    messaging.deleteToken(userToken)
        .then(() => {
            updateSubscriptionOnServer(userToken)
            isSubscribed = false
            userToken = null
            localStorage.removeItem('pushToken')
            updateBtn()
        })
        .catch(err => console.log('Error unsubscribing', err))
}

