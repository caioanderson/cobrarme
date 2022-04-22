import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/hooks/auth';

import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts, Lexend_700Bold, Lexend_400Regular, Lexend_300Light, Lexend_600SemiBold } from '@expo-google-fonts/lexend';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {
  const [fontsLoadedLexend] = useFonts({
    Lexend_700Bold, Lexend_400Regular, Lexend_300Light, Poppins_400Regular, Lexend_600SemiBold
  });

  if (!fontsLoadedLexend)
    return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      <StatusBar style='light' />
    </ThemeProvider>
  );
}

