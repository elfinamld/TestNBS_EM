/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View />
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
