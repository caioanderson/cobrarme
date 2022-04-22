import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Title } from './styles';

export function Welcome(){
    return(
        <Container>
            <Title>cobrar.me</Title>
            <StatusBar style='light'/>
        </Container>
    )
}