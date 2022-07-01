import React, { useState } from 'react';
import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Icon, Account, AccountName, CategoryName, Amount, Detail } from './style';

interface Account {
    name: string;
    icon?: ImageSourcePropType;
}

interface Payment{
    name: string;
    info_payment: string;
}

export interface AccountCardProps {
    type: 'debit' | 'no-debit';
    account: Account;
    name: string;
    urlImage: string;
    category: string;
    amount: number;
    admin_account: Payment;
}

interface Props extends TouchableOpacityProps{
    data: AccountCardProps;
}

export function AccountCard({ data, ...rest }: Props) {

    const [viewAmount, setViewAmount] = useState(true);

    function onChangeViewAmount() {
        setViewAmount(!viewAmount);
    }

    return (
        <Container {...rest}>
            <Account>
                <Icon source={{ uri: data.urlImage }} />
                <Detail>
                    <AccountName>{data.name}</AccountName>
                    <CategoryName>{data.category}</CategoryName>
                </Detail>
            </Account>
            <TouchableOpacity onPress={onChangeViewAmount}>
                {viewAmount ? <AntDesign name="eye" size={24} color="black" /> :
                    <Amount type={data.type}>{Number(data.amount).toFixed(2)}</Amount>
                }
            </TouchableOpacity>

        </Container >
    )
}