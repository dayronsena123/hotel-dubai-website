// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn62Rq386iZFgTVaCRRGEyRD2OVS0cKds",
    authDomain: "hotel-dubai-82ef0.firebaseapp.com",
    projectId: "hotel-dubai-82ef0",
    storageBucket: "hotel-dubai-82ef0.firebasestorage.app",
    messagingSenderId: "666095202976",
    appId: "1:666095202976:web:abfe7cf07213ba1d190fc5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Export para usar en otros archivos
window.firebaseDB = db;
