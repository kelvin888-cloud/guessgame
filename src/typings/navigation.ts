import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SCREENS} from '../constants/screens';

export type RootStackParamList = {
  [SCREENS.MAIN_STACK]: undefined;
  [SCREENS.MAIN]: undefined;
  [SCREENS.START]: undefined;
  [SCREENS.OVER]: undefined;
};

export type StackParams<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  // navigation: RootStackNavigationProp<T>;
  navigation: any;
  route: RouteProp<RootStackParamList, T>;
};
