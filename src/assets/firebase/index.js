import * as firebase from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY43jfKU9EMvQv0uqeqIP3Fh21kahsHU8",
  authDomain: "romper-b1d45.firebaseapp.com",
  projectId: "romper-b1d45",
  storageBucket: "romper-b1d45.appspot.com",
  messagingSenderId: "667766448795",
  appId: "1:667766448795:web:63688bb9c0feb7a0addc3e"
};

const app = firebase.initializeApp(firebaseConfig)
export const auth = firebaseAuth.initializeAuth(app)
export default firebaseAuth

const storage = getStorage()
//points to root storage
export const storageRef = ref(storage)
//could also have it pointing to any deeper reference
//example: specifFolderRef = ref(storage, 'specificFolderName')

