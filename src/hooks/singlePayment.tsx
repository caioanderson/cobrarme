import React, { createContext, ReactNode, useContext, useState } from 'react';
import { AccountCardProps } from '../components/AccountCard';

interface singlePaymentContextData{
    dataAccount: AccountCardProps;
    setSinglePayment: (value: AccountCardProps) => void;
}

interface SinglePaymentProviderProps{
    children: ReactNode;
}

const singlePaymentContext = createContext({} as singlePaymentContextData);
const { Provider } = singlePaymentContext;

function SinglePaymentProvider({ children }: SinglePaymentProviderProps){

    const [dataAccount, setDataAccount] = useState<AccountCardProps>({} as AccountCardProps);

    function setSinglePayment(newAccount: AccountCardProps){
        setDataAccount(newAccount);
    }

    return(
        <Provider value={{ dataAccount, setSinglePayment }}>
            { children }
        </Provider>
    )
}

function useSinglePayment(){
    const context = useContext(singlePaymentContext);
    return context;
}

export { SinglePaymentProvider, useSinglePayment }