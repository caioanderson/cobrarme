import React from 'react';
import { Alert, Platform } from 'react-native';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import {
    Container, Header, TitleWrapper, Logo, Title,
    SignInTitle, Footer, FooterWrapper
} from './styles';

import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';

export function SignIn() {

    const { signInWithGoogle, signInWithApple, user } = useAuth();


    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();


        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel acessar a conta Google')
        }
    }

    async function handleSignInWithApple() {
        try {
            await signInWithApple();

        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel acessar a conta Apple')
        }
    }


    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Logo>cobrar.me</Logo>
                    <Title>Ajudamos a cobrar e {`\n`}
                        lembrar das contas {`\n`}
                        de forma simples</Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {`\n`}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton title='Entrar com Google' icon={GoogleSVG} onPress={handleSignInWithGoogle} />
                    {Platform.OS === 'ios' &&
                        <SignInSocialButton title='Entrar com Apple' icon={AppleSVG} onPress={handleSignInWithApple} />
                    }
                </FooterWrapper>
            </Footer>

        </Container>
    )
}