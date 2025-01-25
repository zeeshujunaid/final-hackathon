
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setItem } from "localforage";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBBeUIcfv1MlYwEVwCKnM1Ozz-B1ycnL5g",
    authDomain: "ecommerce-e9730.firebaseapp.com",
    projectId: "ecommerce-e9730",
    storageBucket: "ecommerce-e9730.firebasestorage.app",
    messagingSenderId: "32441184657",
    appId: "1:32441184657:web:0a868977509c8764012a30"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


// Set auth language (optional)
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info
        const user = result.user;
        localStorage.setItem("user", user.uid);
        localStorage.setItem("email", user.email);
        // const uid = res.user.uid;
    // You can save user info like the UID, email, etc. here
        // console.log("User ID: ", user.uid);
    } catch (error) {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error("Error during sign-in: ", errorMessage);
    }
};


export { db, storage, auth, signInWithGoogle };
