import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFOLCwCxbdhCSrKVC0g9z2IcqZi_3qWfM",
  authDomain: "creative-cards-app-ab680.firebaseapp.com",
  databaseURL: "https://creative-cards-app-ab680.firebaseio.com",
  projectId: "creative-cards-app-ab680",
  storageBucket: "creative-cards-app-ab680.appspot.com",
  messagingSenderId: "546411047617",
  appId: "1:546411047617:web:6789c9ab309934e2d20240",
  measurementId: "G-2GT8FWV8MZ"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();
