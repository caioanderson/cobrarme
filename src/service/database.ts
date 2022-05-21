import { db, storage } from '../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { doc, getDoc } from 'firebase/firestore';


import { AccountCardProps } from '../components/AccountCard';

export async function getAllAccounts() {
    const docRef = doc(db, "usuarios", "AYADORXCQkZCxyuDIPd6");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const accounts = Object.entries(docSnap.data())
            .filter(([_, value]) => typeof value === 'object');

        const data = Object.fromEntries(accounts);

        const accountsList = data.accounts
            .map((account: AccountCardProps) => account)

        return accountsList;
    } else {
        return new Error("Not found docs")
    }

}

export async function getAccountsDebit() {

    const docRef = doc(db, "usuarios", "AYADORXCQkZCxyuDIPd6");
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
        const accounts = Object.entries(docSnap.data())
            .filter(([_, value]) => typeof value === 'object');

        const data = Object.fromEntries(accounts);

        const accountsDebits = data.accounts
            .filter((account: AccountCardProps) => {


               return account.type === 'debit'
            });

            
        let pathReference;
        let accountList = {};
        const mountImagesFromAccounts = accountsDebits.map(async(accounts: AccountCardProps) => {
            let urlImage;
            pathReference = ref(storage, `images/${accounts.name}.png`)
            await getDownloadURL(pathReference).then(url => {
               urlImage = url;
            })

            accountList = {...accounts, urlImage};
            console.log(accountList)


        })


        return accountsDebits;
    } else {
        return new Error("Not found doc")
    }

}

