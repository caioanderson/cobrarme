import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Head, BackButton, IconBack, Logo } from './styles';

export function HeadScreen() {

    const { goBack } = useNavigation();

    return (
        <Head>
            <GestureHandlerRootView>
                <BackButton onPress={() => goBack()}>
                    <IconBack />
                </BackButton>
            </GestureHandlerRootView>
            <Logo>cobrar.me</Logo>
        </Head>
    )
}