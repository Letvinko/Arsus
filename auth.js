
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-qEZxkDWQcxxE7zTeICfp2cgwIvB5T7g",
    authDomain: "arsus-cd788.firebaseapp.com",
    databaseURL: "https://arsus-cd788.firebaseio.com",
    projectId: "arsus-cd788",
    storageBucket: "arsus-cd788.appspot.com",
    messagingSenderId: "529492898628",
    appId: "1:529492898628:web:0edcd3b66e7f5b6ba4dd11",
    measurementId: "G-11DTDW3MTF"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.database().goOnline();
