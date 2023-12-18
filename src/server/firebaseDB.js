// Firebase app is always required and must be first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

// Flamelink app is always required
import flamelink from "flamelink/app";
import "flamelink/content";
import "flamelink/storage";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_VERCEL_apiKey}`,
  authDomain: `${import.meta.env.VITE_VERCEL_authDomain}`,
  databaseURL: `${import.meta.env.VITE_VERCEL_databaseURL}`,
  projectId: `${import.meta.env.VITE_VERCEL_projectId}`,
  storageBucket: `${import.meta.env.VITE_VERCEL_storageBucket}`,
  messagingSenderId: `${import.meta.env.VITE_VERCEL_messagingSenderId}`,
  appId: `${import.meta.env.VITE_VERCEL_appId}`,
  measurementId: `${import.meta.env.VITE_VERCEL_measurementId}`,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//export { firebaseApp };

const appFlamelink = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "rtdb", // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

export default appFlamelink;
