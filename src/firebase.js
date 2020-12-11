import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId:
    // process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyBREn6r2kQivxdBzLC41P90E1BtS0z_3GI",
    authDomain: "web-development-8d911.firebaseapp.com",
    databaseURL: "https://web-development-8d911.firebaseio.com",
    projectId: "web-development-8d911",
    storageBucket: "web-development-8d911.appspot.com",
    messagingSenderId:
    "22005128573",
    appId: "1:22005128573:web:24758472b89f608b358014"
})

export const auth = app.auth()
export default app