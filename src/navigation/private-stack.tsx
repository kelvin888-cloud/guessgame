import React from 'react';
import {SCREENS} from '../constants/screens';
import {RootStackParamList} from '../typings/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IndexGameOverScreen,
  IndexMainScreen,
  IndexStartGameScreen,
} from '../container';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PrivateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MAIN_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.MAIN} component={IndexMainScreen} />
      <Stack.Screen name={SCREENS.START} component={IndexStartGameScreen} />
      <Stack.Screen name={SCREENS.OVER} component={IndexGameOverScreen} />
    </Stack.Navigator>
  );
};
