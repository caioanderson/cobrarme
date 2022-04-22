import React from 'react';
import { RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Button, ImageContainer, Title } from './styles';

interface SignInSocialButtonProps extends RectButtonProps {
    title: string;
    icon: React.FC<SvgProps>
}

export function SignInSocialButton({ title, icon: Icon, ...rest }: SignInSocialButtonProps) {
    return (
        <GestureHandlerRootView>
            <Button {...rest}>
                <ImageContainer>
                    <Icon />
                </ImageContainer>

                <Title>{title}</Title>

            </Button>
        </GestureHandlerRootView>
    )
}