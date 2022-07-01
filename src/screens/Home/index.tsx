import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native'

import { getAccountsDebit } from '../../service/database';
import { useAuth } from '../../hooks/auth';

import {
    Container, Header, Welcome,
    WelcomeUser, Message, Photo,
    ContainerPhoto, Notification, UserWrapper,
    CardCountAccount, TextLogo, Divider, TextCountAccounts, Count,
    Main, Title, CardCountAccountWrapper, AccountList, OpacityBackground,
    Modal, Loading
} from './styles';
import loadingAnimate from '../../assets/animations/teste.json';

import { Divider as Line } from '../../components/Divider';
import { AccountCard, AccountCardProps } from '../../components/AccountCard';
import { PayModal } from '../../components/PayModal';
import { EmptyState } from '../../components/EmptyState';

export interface DataListProps extends AccountCardProps {
    id: string;
}

interface User {
    name: string;
    picture?: string;
}

export function Home() {

    const { user } = useAuth();

    const [data, setData] = useState<DataListProps[]>();
    const [loading, setLoading] = useState(true);
    const [choiceAccount, setChoiceAccount] = useState<DataListProps>();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenPayModal(item: DataListProps) {
        setModalIsOpen(true);
        setChoiceAccount(item);
    }

    function handleClosePayModal() {
        setModalIsOpen(false);
    }

    useEffect(() => {
        async function loadDataFirestore(){
            const accountDebits = await getAccountsDebit();
            setData(accountDebits);
            setLoading(false);
        }

        loadDataFirestore();
    }, [])

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <Welcome>
                        <WelcomeUser>Olá, {user.name}</WelcomeUser>
                        <Message>Mantenha suas contas em dia</Message>
                    </Welcome>
                    <ContainerPhoto>
                        <Photo source={{ uri: user.photo }} />
                        <Notification name='alert-circle' />
                    </ContainerPhoto>
                </UserWrapper>
            </Header>

            <CardCountAccountWrapper>
                <CardCountAccount>

                    <TextLogo>cobrar.me</TextLogo>
                    <Divider />

                    <TextCountAccounts>Você tem {' '}
                        {loading && <Count><Loading /> contas </Count>}
                        {!loading && <Count>{data?.length} contas</Count>}
                        {'\n'}
                        cadastradas para pagar.
                    </TextCountAccounts>


                </CardCountAccount>
            </CardCountAccountWrapper>

            <Main>
                <Title>Minhas contas</Title>
                <Line />

                {loading ? (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <LottieView
                            style={{ height: 300, width: 300 }}
                            source={loadingAnimate}
                            autoPlay autoSize loop resizeMode='contain'
                        />
                    </SafeAreaView>
                ) : (
                    data?.length !== 0 ? (
                        <AccountList
                            data={data}
                            keyExtractor={item => String(item.id)}
                            renderItem={({ item }) => <AccountCard data={item} onPress={() => handleOpenPayModal(item)}
                            />
                        }
                        />
                    ) : (
                        <EmptyState />
                    )
                )}

            </Main>

            {modalIsOpen && <OpacityBackground />}
            <Modal visible={modalIsOpen}>
                <PayModal data={choiceAccount!} closeModal={handleClosePayModal} />
            </Modal>
        </Container >
    )
}