import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../../../../config';
import Screen1 from './screen1';

const Stack = createStackNavigator();

const { routes } = constants;

const Drawer2 = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.Drawer2Screen1}
      component={Screen1}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Drawer2;
