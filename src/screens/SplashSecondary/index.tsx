import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NavigationStack } from '../../routes/app.routes';

import Animated, {
    useSharedValue, useAnimatedStyle, withTiming, interpolate,
    Easing, Extrapolate, runOnJS
} from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import { Container, Point, ContainerAnimation } from './styles';


export function SplashSecondary() {

    const theme = useTheme();
    const { navigate } = useNavigation<NavigationStack>();

    const titleLeftOpacity = useSharedValue(0);
    const titleLeftPositionTransform = useSharedValue(100);

    const pointHeight = useSharedValue({ width: 100, height: 100 });
    const pointPosition = useSharedValue(Dimensions.get('screen').width / 2)


    const titleRightPositionOpacity = useSharedValue(0);
    const titleRightPositionTransform = useSharedValue(-100);

    function startApp(){
        navigate('SignIn')
    }

    useEffect(() => {

        pointPosition.value = withTiming(
            0,
            { duration: 500, easing: Easing.ease },
            () => {
                titleLeftOpacity.value = withTiming(
                    50,
                    { duration: 1000 }
                );

                titleLeftPositionTransform.value = withTiming(
                    6,
                    {
                        duration: 1000,
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
                        duration: 1000,
                        easing: Easing.bounce
                    },
                    () => {
                        pointHeight.value = { width: 7, height: 7 };
                        'worklet'
                        runOnJS(startApp)();

                    }
                );
            }
        )
        

    }, [])

    const pointHeightStyleAnimated = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: pointPosition.value }],
            width: withTiming(pointHeight.value.width, { duration: 500, easing: Easing.bounce }),
            height: withTiming(pointHeight.value.height, { duration: 500, easing: Easing.bounce }),

        }
    });

    const titleLeftStyleAnimated = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: titleLeftPositionTransform.value }],
            opacity: interpolate(titleLeftOpacity.value,
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

                <Animated.View style={[
                    styleFixed.point,
                    { backgroundColor: theme.colors.title_light, borderRadius: pointHeight.value.height / 2 },
                    pointHeightStyleAnimated
                ]} />

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
    container_second : {
        height : '100%',
        width : '100%',
    },

    title: {
        fontSize: 30,
        marginRight: 5
    },
    point: {
        marginTop: 20,
        marginRight: 5
    }
})