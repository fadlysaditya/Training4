/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

// import Home from './src/screens/Home';
// import HomeStack from './src/navigations/HomeStack';
import MainTab from './src/navigation/MainTab';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </>
  );
};

export default App;
