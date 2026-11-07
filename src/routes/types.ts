import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabParamList = {
  Cadastro: undefined;
  Saida: undefined;
  Estoque: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  BottomRoutes: NavigatorScreenParams<BottomTabParamList> | undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
