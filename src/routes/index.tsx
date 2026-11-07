import React from 'react';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { tokens } from '../global/tokens';
import { StackRoutes } from './stack.routes';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: tokens.colors.primary,
    background: tokens.colors.background,
    card: tokens.colors.background,
    text: tokens.colors.textDark,
    border: tokens.colors.border,
    notification: tokens.colors.danger
  }
};

export function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style="dark" />
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
