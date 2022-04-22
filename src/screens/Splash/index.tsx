import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationStack } from '../../routes/app.routes';
import { useAuth } from '../../hooks/auth';

import Animated, {
    useSharedValue, useAnimatedStyle, withTiming, interpolate,
    Easing, Extrapolate, runOnJS
} from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import { Container, Point, ContainerAnimation } from './styles';



export function Splash() {

    const theme = useTheme();
    const { user } = useAuth();

    const { navigate } = useNavigation<NavigationStack>();

    const titleLeftPositionOpacity = useSharedValue(0);
    const titleLeftPositionTransform = useSharedValue(-(Dimensions.get('screen').width));


    const titleRightPositionOpacity = useSharedValue(0);
    const titleRightPositionTransform = useSharedValue(Dimensions.get('screen').width);

    const titleLeftStyleAnimated = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: titleLeftPositionTransform.value }],
            opacity: interpolate(titleLeftPositionOpacity.value,
                [0, 50],
                [0, 1],
                Extrapolate.CLAMP
            )
        }
    });

    const titleRightStyleAnimated = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: titleRightPositionTransform.value }],
            opacity: interpolate(titleRightPositionOpacity.value,
                [0, 50],
                [0, 1],
                Extrapolate.CLAMP
            )
        }
    });

    function startApp(){
        navigate('Initial');
    }

    useEffect(() => {
        titleLeftPositionOpacity.value = withTiming(
            50,
            { duration: 1000 }
        );

        titleLeftPositionTransform.value = withTiming(
            0,
            {
                duration: 1500,
                easing: Easing.bounce
            }
        );

        titleRightPositionOpacity.value = withTiming(
            50,
            { duration: 1000 }
        );

        titleRightPositionTransform.value = withTiming(
            0,
            {
                duration: 1500,
                easing: Easing.bounce
            },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );

    }, [])

    return (
        <Container>
            <ContainerAnimation>

                <Animated.Text style={[
                    styleFixed.title,
                    { color: theme.colors.title_light, fontFamily: theme.fonts.bold },
                    titleLeftStyleAnimated
                ]}>
                    cobrar
                </Animated.Text>

                <Point>.</Point>
                
                <Animated.Text style={[
                    styleFixed.title,
                    { color: theme.colors.title_light, fontFamily: theme.fonts.bold },
                    titleRightStyleAnimated
                ]}>
                    me
                </Animated.Text>
            </ContainerAnimation>
        </Container>
    )
}


export const styleFixed = StyleSheet.create({
    title: {
        fontSize: 30,
    }
})