import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
    signInWithApple(): Promise<void>;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    },
    type: string;
}

const AuthContext = createContext({} as AuthContextData);
const { Provider } = AuthContext;

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    async function signInWithGoogle() {
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if (type === 'success') {

                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
                const userLogged = {
                    id: userInfo.id,
                    name: userInfo.given_name,
                    email: userInfo.email,
                    photo: userInfo.picture
                }
                setUser(userLogged);

                await AsyncStorage.setItem('@cobrar.me:user', JSON.stringify(userLogged))

            }


        } catch (error: any) {
            console.log(error)
            throw new Error(error)
        }
    }

    async function signInWithApple() {
        try {

            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]
            });

            if (credential) {
                const userLogged = {
                    email: credential.email!,
                    id: String(credential.user),
                    name: credential.fullName!.givenName!,
                    photo: undefined
                }
                setUser(userLogged)
                await AsyncStorage.setItem('@cobrar.me:user', JSON.stringify(user))
            }

        } catch (error: any) {
            throw new Error(error);
        }
    }

    async function userRemoveDataStorage(){
        await AsyncStorage.removeItem('@cobrar.me:user');
    }


    useEffect(() => {
        async function userLoadStorageData() {
            const data = await AsyncStorage.getItem('@cobrar.me:user');

            if (data) {
                const userLogged = JSON.parse(data) as User;
                setUser(userLogged)
            }

            setUserStorageLoading(false);
        }

        userLoadStorageData();
        // userRemoveDataStorage();

    }, [])

    return (
        <Provider value={{ user, signInWithGoogle, signInWithApple }}>
            {children}
        </Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }