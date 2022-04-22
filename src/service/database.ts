import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getData() {
    const docRef = doc(db, "usuarios", "AYADORXCQkZCxyuDIPd6");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data()
    } else {
        return new Error("Not found docs")
    }

}
