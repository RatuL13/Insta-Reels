import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyBi_4AXkRN024wFD9d7ebCYRM8bMFQsqYk",
        authDomain: "reels-9d035.firebaseapp.com",
        projectId: "reels-9d035",
        storageBucket: "reels-9d035.appspot.com",
        messagingSenderId: "717436319287",
        appId: "1:717436319287:web:41b4220881e62aed84b1b2"
    }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection("posts"),
    comments: firestore.collection("comments"),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp // used to tell the
    // time of user when user signed in or signed up
}
export const storage = firebase.storage(); // used for storing images and videos
// export default firebase;
