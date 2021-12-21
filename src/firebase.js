import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBgWxn5feVXqDrej2Vq38Sn4TCJC8Ll5I",
  authDomain: "clone-ef19a.firebaseapp.com",
  projectId: "clone-ef19a",
  storageBucket: "clone-ef19a.appspot.com",
  messagingSenderId: "831786029505",
  appId: "1:831786029505:web:8b848fb13350cc3e789f40",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { auth, db };

export default app;
