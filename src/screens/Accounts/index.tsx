import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native'

import { AccountCard } from '../../components/AccountCard';
import { Divider } from '../../components/Divider';

import api from '../../service/api';

import { DataListProps } from '../Home';

import loadingAnimate from '../../assets/animations/teste.json';
import {
    Container, ContainerCardTotalAmount, CardTotalAmount, Logo,
    ContainerTotal, Total, Amount,
    ContainerContentAccounts, Title, ContainerAccounts, ListAccounts,
    Loading
} from './styles';

export function Accounts() {

    const [accounts, setAccount] = useState<DataListProps[]>();
    const [loading, setLoading] = useState(true);

    const total = accounts?.reduce((acc, item) => acc + item.amount, 0);

    useEffect(() => {
        async function loadAccounts() {
            const response = await api.get("accounts").then(response => response.data);
            setAccount(response);
            setLoading(false);
        }

        loadAccounts();
    }, [])

    return (
        <Container>
            <ContainerCardTotalAmount>
                <CardTotalAmount>
                    <Logo>cobrar.me</Logo>
                    <ContainerTotal>
                        <Total>total</Total>
                        <Amount>R$ {' '}
                            {loading && <Loading />}
                            {!loading && Number(total).toFixed(2)}
                        </Amount>
                    </ContainerTotal>
                </CardTotalAmount>
            </ContainerCardTotalAmount>

            <ContainerContentAccounts>
                <Title>Todas as contas</Title>
                <Divider />

                <ContainerAccounts>
                    {loading ? (
                        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <LottieView
                                style={{ height: 300, width: 300 }}
                                source={loadingAnimate}
                                autoPlay autoSize loop resizeMode='contain'
                            />
                        </SafeAreaView>
                    ) : (
                        <ListAccounts
                            data={accounts}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <AccountCard data={item} onPress={() => { }} />}
                        />
                    )}

                </ContainerAccounts>

            </ContainerContentAccounts>


        </Container>
    )
}