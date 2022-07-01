import { db, storage } from '../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { doc, getDoc, getDocs, query, collection } from 'firebase/firestore';

import { AccountCardProps } from '../components/AccountCard';

const USER = "usuarios"
const GROUP = "groups"
interface Account extends AccountCardProps {
    urlImage: string;
}

async function UserDocRef(userId: string) {
    const docRef = doc(db, USER, userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found docs")
    }
}

async function GroupDocRef(docId: string) {
    const docRef = doc(db, GROUP, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found docs")
    }
}

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

        //Pegando url da imagem pelo nome da conta

        // let pathReference;
        // let newAccount = {};
        // var accountList: any = [];

        // accountsDebits.map(async(accounts: AccountCardProps) => {
        //     let urlImage;
        //     pathReference = ref(storage, `images/${accounts.name}.png`);
        //     await getDownloadURL(pathReference).then(url => {
        //        urlImage = url;
        //     });

        //     console.log(urlImage)
        // })

        return accountsDebits;
    } else {
        return new Error("Not found doc")
    }

}

export async function getUser(id: string) {
    const docRef = doc(db, "usuarios", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
}

interface MembersProps {
    id: string;
    amount: string;
    user: string;
    type: string;
}

interface UserProps {
    contact: string;
    email: string;
    info_payment: string;
    name: string;
}

async function getMyGroup(idGroup: string, idUser: string) {
    //Pegar dados dos grupos do qual sou adm
    const docRef = doc(db, "groups", idGroup);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (docSnap.data().adm_group === idUser) {
            return docSnap.data()
        }
    }
}

export async function getMyGroupsTeste() {

    //andar pelos docs
    const q = query(collection(db, "groups"));
    const docs = await getDocs(q);

    let groupListId: string[] = []
    docs.forEach((doc) => groupListId.push(doc.id))

    let groupList: any = []
    const groups = groupListId.map(async (id) => {
        // console.log("🚀 ~ file: database.ts ~ line 112 ~ groups ~ id", id)
        const myGroup = await getMyGroup(id, 'AYADORXCQkZCxyuDIPd6')
        if (myGroup !== undefined) {
            groupList.push(myGroup)
        }
    })

    const response = Promise.all(groups).then(() => groupList);

    return response;
}

export async function getMyGroups() {
    const { my_groups } = await UserDocRef('AYADORXCQkZCxyuDIPd6');
    let myListGroups: object[] = []
    const groupsData = my_groups.map(async (groupId: string) => {
        const response = await GroupDocRef(groupId);
            myListGroups.push(response);
    })
    
    const data = await Promise.all(groupsData).then(() => myListGroups);
    return data;
}

export async function getGroupsParticipate() {
    const { groups_participate } = await UserDocRef('AYADORXCQkZCxyuDIPd6');
    let myListGroups: object[] = []
    const groupsData = groups_participate.map(async (groupId: string) => {
        const response = await GroupDocRef(groupId);
            myListGroups.push(response);
    })
    
    const data = await Promise.all(groupsData).then(() => myListGroups);
    return data;
}

