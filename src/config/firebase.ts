import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './keys';

//Initialize app
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app);
