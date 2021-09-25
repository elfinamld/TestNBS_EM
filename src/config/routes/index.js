import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenRoutes} from './screenRoutes';
import {screens} from './screens';
import {navigationRef} from './NavigationServices';

const Stack = createNativeStackNavigator();

const NavigatorApp = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={screens.login}
        screenOptions={{header: () => {}}}>
        {screenRoutes.map((el, id) => {
          return (
            <Stack.Screen key={id} name={el.name} component={el.component} />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorApp;
