import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBcMtRyEN1euFCCqPy6vJKx7s3i5hv8iN0",
    authDomain: "lego-app-e4d06.firebaseapp.com",
    projectId: "lego-app-e4d06",
    storageBucket: "lego-app-e4d06.appspot.com",
    messagingSenderId: "366460170993",
    appId: "1:366460170993:web:de472fe70fc03e0364af50",
    measurementId: "G-STJEHP144G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


