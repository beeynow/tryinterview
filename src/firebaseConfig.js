import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c",
  authDomain: "test-590a3.firebaseapp.com",
  projectId: "test-590a3",
  storageBucket: "test-590a3.firebasestorage.app",
  messagingSenderId: "708966463501",
  appId: "1:708966463501:web:80a4e10962f9456e9e3d44"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };