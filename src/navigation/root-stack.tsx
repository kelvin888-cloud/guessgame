import React from 'react';
import {SCREENS} from '../constants/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrivateStack} from './private-stack';
import {StackParams} from '../typings/navigation';

const Stack = createNativeStackNavigator<StackParams>();

export const RootNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={SCREENS.MAIN_STACK}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.MAIN_STACK} component={PrivateStack} />
      </Stack.Navigator>
    </>
  );
};
