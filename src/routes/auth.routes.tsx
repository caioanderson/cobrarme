import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SplashSecondary } from '../screens/SplashSecondary';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashInitial'>
            {/* <Screen component={SplashSecondary} name="SplashInitial" /> */}
            <Screen component={SignIn} name="SignIn" />
        </Navigator>
    )
}