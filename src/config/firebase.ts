import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB221vPaAIybFxNfGfe35flPgT3FXQQ7Io",
    authDomain: "proof-of-unknown.firebaseapp.com",
    projectId: "proof-of-unknown",
    storageBucket: "proof-of-unknown.appspot.com",
    messagingSenderId: "849012841206",
    appId: "1:849012841206:web:d9c25c7a786ae3f2d1ead7",
    measurementId: "G-6N07DZKVJL"

};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);
