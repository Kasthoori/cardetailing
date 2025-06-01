import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "KEY",
    authDomain: "poject_name.firebaseapp.com",
    projectId: "project_id",
    storageBucket: "project.appspot.com",
    messagingSenderId: "sender_id",
    appId: "app_id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);