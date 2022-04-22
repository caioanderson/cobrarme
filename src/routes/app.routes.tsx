import React from 'react';
import { Platform, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components/native';
import { SinglePaymentProvider } from '../hooks/singlePayment';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SinglePayment } from '../screens/SinglePayment';
import { Splash } from '../screens/Splash';
import { Accounts } from '../screens/Accounts';
import { Groups } from '../screens/Groups';
import { Contacts } from '../screens/Contacts';

import { Feather } from '@expo/vector-icons';

export interface NavigationStack {
    navigate: (value: string) => void;
}

export function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <SinglePaymentProvider>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                {/* <Screen component ={Splash} name='Splash' /> */}
                <Screen component={TabRoutes} name="Initial" />
                <Screen component={SinglePayment} name="SinglePayment" />
            </Navigator>
        </SinglePaymentProvider>
    )
}

function TabRoutes() {
    const theme = useTheme();
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.icon_destabilized,
            tabBarStyle: {
                height: 72,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                justifyContent: 'space-around',
                flexDirection: 'column',
                paddingHorizontal: RFValue(30),
            },

        }}>
            <Screen component={Home} name='Home' options={{
                tabBarIcon: (({ size, color }) => <Feather style={{ position: 'relative' }} name="home" size={size} color={color} />),
                tabBarLabel: (({ focused, color }) => focused &&
                    <Text style={{
                        fontSize: 12,
                        color: color,
                        position: 'absolute',
                        bottom: 5,
                        fontFamily: theme.fonts.bold
                    }}>Home</Text>
                )
            }} />
            <Screen component={Accounts} name='Accounts' options={{
                tabBarIcon: (({ size, color }) => <Feather style={{ position: 'relative' }} name="dollar-sign" size={size} color={color} />),
                tabBarLabel: (({ focused, color }) => focused &&
                    <Text style={{
                        fontSize: 12,
                        color: color,
                        position: 'absolute',
                        bottom: 5,
                        fontFamily: theme.fonts.bold
                    }}>Contas</Text>
                )
            }} />

            <Screen component={Groups} name='Groups' options={{
                tabBarIcon: (({ size, color }) => <Feather style={{ position: 'relative' }} name="grid" size={size} color={color} />),
                tabBarLabel: (({ focused, color }) => focused &&
                    <Text style={{
                        fontSize: 12,
                        color: color,
                        position: 'absolute',
                        bottom: 5,
                        fontFamily: theme.fonts.bold
                    }}>Grupos</Text>
                )
            }} />

            <Screen component={Contacts} name='Contacts' options={{
                tabBarIcon: (({ size, color }) => <Feather style={{ position: 'relative' }} name="users" size={size} color={color} />),
                tabBarLabel: (({ focused, color }) => focused &&
                    <Text style={{
                        fontSize: 12,
                        color: color,
                        position: 'absolute',
                        bottom: 5,
                        fontFamily: theme.fonts.bold
                    }}>Contatos</Text>
                )
            }} />

        </Navigator >
    )
}