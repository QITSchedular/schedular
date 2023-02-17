import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { ToastContainer, toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyB0NcAKqx2Ex0JURoB9T9HskjacUDaOF6s",
  authDomain: "schedular-8ef4e.firebaseapp.com",
  projectId: "schedular-8ef4e",
  storageBucket: "schedular-8ef4e.appspot.com",
  messagingSenderId: "943597961757",
  appId: "1:943597961757:web:aade9c79a74f3a92dd3cf4",
  measurementId: "G-VB0ZTLJ06J"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (name, email, password, website, companyName, subject) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password,);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      website,
      companyName,
      subject,
      authProvider: "local",
      email,
    });
  } catch (err) {
    // console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("We have sent Password reset link to your Email!");
  } catch (err) {
    // console.error(err);
    alert(err.message);
  }
};


export {
  auth,
  db,
  registerWithEmailAndPassword,
  sendPasswordReset,
  storage,
};
