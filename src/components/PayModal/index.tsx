import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useSinglePayment } from '../../hooks/singlePayment';

import { Divider } from '../Divider';
import { AccountCardProps } from '../../components/AccountCard';
import { NavigationStack } from '../../routes/app.routes';
import {
    Container, AreaModal, WrapperContent,
    Line, Question, Bold,
    TextButtonCancel, TextButtonConfirmation, ContainerFooter,
    ContainerButtons, ButtonCancel, ButtonConfirmation, Footer
} from './styles';

interface PayModalProps {
    closeModal: () => void;
    data: AccountCardProps;
}

export function PayModal({ data, closeModal }: PayModalProps) {
    console.log("🚀 ~ file: index.tsx ~ line 22 ~ PayModal ~ data", data)

    const { setSinglePayment } = useSinglePayment();

    const { navigate } = useNavigation<NavigationStack>();

    function handleScreenPayment() {
        closeModal();
        setSinglePayment(data);
        navigate("SinglePayment");
    }

    return (
        <Container>
            <AreaModal>
                <Line />
                <WrapperContent>
                    <Question>Pagar a conta <Bold>{data.name}</Bold> {'\n'}
                        no valor de R$ <Bold>{Number(data.amount).toFixed(2)}</Bold> ?</Question>

                    <ContainerButtons>
                        <ButtonCancel onPress={closeModal}>
                            <TextButtonCancel >Não</TextButtonCancel>
                        </ButtonCancel>
                        <ButtonConfirmation onPress={handleScreenPayment}>
                            <TextButtonConfirmation>Sim</TextButtonConfirmation>
                        </ButtonConfirmation>
                    </ContainerButtons>
                </WrapperContent>
                <Divider />
                <ContainerFooter>
                    <Footer>Pagar várias contas 🤩</Footer>
                </ContainerFooter>
            </AreaModal>
        </Container>
    )
}