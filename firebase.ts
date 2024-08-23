import { getApp , getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDpg0fimuEJSiIIzpS9SCDs2enZcc73yR8",
    authDomain: "chat-with-pdf-buzzi.firebaseapp.com",
    projectId: "chat-with-pdf-buzzi",
    storageBucket: "chat-with-pdf-buzzi.appspot.com",
    messagingSenderId: "485970902434",
    appId: "1:485970902434:web:205fd113fa2e4bc62246fb"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };