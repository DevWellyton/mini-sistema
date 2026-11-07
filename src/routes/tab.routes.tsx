import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tokens } from '../global/tokens';
import Cadastro from '../pages/cadastro';
import Estoque from '../pages/estoque';
import Saida from '../pages/saida';
import type { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

const TAB_ICONS: Record<keyof BottomTabParamList, { active: IconName; inactive: IconName }> = {
  Cadastro: {
    active: 'package-variant-closed-plus',
    inactive: 'package-variant-closed'
  },
  Saida: {
    active: 'tray-arrow-up',
    inactive: 'export-variant'
  },
  Estoque: {
    active: 'warehouse',
    inactive: 'package-variant'
  }
};

export function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: tokens.colors.background
        },
        headerTitleStyle: {
          color: tokens.colors.textDark,
          fontSize: 18,
          fontWeight: '600'
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.textMuted,
        tabBarStyle: {
          backgroundColor: tokens.colors.surface,
          borderTopColor: tokens.colors.border,
          borderTopWidth: 1
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600'
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused ? TAB_ICONS[route.name].active : TAB_ICONS[route.name].inactive}
            size={size}
            color={color}
          />
        )
      })}
    >
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: 'Novo Produto', tabBarLabel: 'Produto' }}
      />
      <Tab.Screen
        name="Saida"
        component={Saida}
        options={{ title: 'Saída de Produto', tabBarLabel: 'Saída' }}
      />
      <Tab.Screen
        name="Estoque"
        component={Estoque}
        options={{ title: 'Controle de Estoque', tabBarLabel: 'Estoque' }}
      />
    </Tab.Navigator>
  );
}
