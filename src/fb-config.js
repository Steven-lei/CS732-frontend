import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAg91_mestsoQ9AhY0Aqs6Wy5KepK4dRng",
  authDomain: "cs732-5cfa7.firebaseapp.com",
  projectId: "cs732-5cfa7",
  storageBucket: "cs732-5cfa7.firebasestorage.app",
  messagingSenderId: "557680798445",
  appId: "1:557680798445:web:44bd6e8df254a42d30fae4",
};
//const app = initializeApp(firebaseConfig);
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export default app;
