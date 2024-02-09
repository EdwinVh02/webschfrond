importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCclkFqP7r2Ors4jfjZHSU00I103Y1mJPA",
    authDomain: "your-room-9e781.firebaseapp.com",
    projectId: "your-room-9e781",
    storageBucket: "your-room-9e781.appspot.com",
    messagingSenderId: "176291315387",
    appId: "1:176291315387:web:1b1545503910abca9b339e",
    measurementId: "G-7KS6V27KQB"
  };

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/maskable.png"
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})