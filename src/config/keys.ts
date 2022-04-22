const { API_KEY }= process.env;
const { AUTH_DOMAIN } = process.env;
const { PROJECT_ID } = process.env;
const { STORAGE_BUCKET } = process.env;
const { MESSAGING_SENDER_ID } = process.env;
const { APP_ID } = process.env;
const{ MEASUREMENT_ID } = process.env;

export const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
}