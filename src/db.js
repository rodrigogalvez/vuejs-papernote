import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCbQ0m5wq3IXutRiWy2IQH8RY0tmHK6K5Y",
    authDomain: "papernote-eda9c.firebaseapp.com",
    projectId: "papernote-eda9c",
    storageBucket: "papernote-eda9c.appspot.com",
    messagingSenderId: "526416617104",
    appId: "1:526416617104:web:b8700ec0ceb76f60768215"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })