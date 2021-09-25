/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colour} from './src/assets/styles';
import NavigatorApp from './src/config/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colour.GREEN[2],
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigatorApp />
    </SafeAreaView>
  );
};

class Main extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }
}

export default Main;
