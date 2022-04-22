import React from 'react';
import LottieView from 'lottie-react-native';
import animation from '../../assets/animations/empty.json';
import { Container, Message } from './styles';

export function EmptyState() {
    return (
        <Container>
            <LottieView resizeMode='contain' autoPlay loop source={animation} />
        </Container>
    )
}