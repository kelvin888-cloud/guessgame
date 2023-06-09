/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import utilities from './tailwind.json';
import {TailwindProvider} from 'tailwind-rn';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/root-stack';

class App extends React.Component {
  render() {
    return (
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </TailwindProvider>
    );
  }
}

export default App;
