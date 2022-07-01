import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

import { useSinglePayment } from '../../hooks/singlePayment';

import { HeadScreen } from '../../components/HeadScreen';

import {
    Container, Header, WrapperContent, Content, Account, TitlePayment,
    Amount, TextSmall, ContainerCategory, Title, WrapperCategory,
    ContainerIcon, Icon, Name, Footer, TitleInfo, PaymentButton, Cod, Clip

} from './styles';

export function SinglePayment() {

    const { dataAccount } = useSinglePayment();
 
    function handleClipBoard() {
        Clipboard.setString(dataAccount.admin_account.info_payment);
    }

    return (
        <Container>
            <Header>
                <HeadScreen />
                <WrapperContent>
                    <Content>
                        <Account>Spotify</Account>
                        <TitlePayment>
                            O pagamento será enviado para: {dataAccount.admin_account.name} 🤑
                        </TitlePayment>
                        <Amount>
                            <TextSmall>R$</TextSmall>
                            {dataAccount.amount}
                        </Amount>
                    </Content>
                </WrapperContent>

                <ContainerCategory>
                    <Title>Categoria</Title>
                    <WrapperCategory>
                        <ContainerIcon>
                            <Icon />
                        </ContainerIcon>
                        <Name>#musica</Name>
                    </WrapperCategory>
                </ContainerCategory>
            </Header>
            <Footer>
                <TitleInfo>
                    Para realizar o pagamento, copie esse {'\n'}
                    código e utilize no seu app de banco {'\n'}
                    favorito
                </TitleInfo>

                <GestureHandlerRootView>
                    <PaymentButton onPress={() => handleClipBoard()}>
                        <Cod>{dataAccount.admin_account.info_payment}</Cod>
                        <Clip />
                    </PaymentButton>
                </GestureHandlerRootView>

            </Footer>
        </Container>
    )
}