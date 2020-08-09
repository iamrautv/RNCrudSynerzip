import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { constants } from '../../../config';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const { routes } = constants;

const Tab = createBottomTabNavigator();

const TabScreens = () => (
  <Tab.Navigator>
    <Tab.Screen name={routes.Tab1} component={Tab1} />
    <Tab.Screen name={routes.Tab2} component={Tab2} />
  </Tab.Navigator>
);

export default TabScreens;
