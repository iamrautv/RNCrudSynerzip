import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../../../config';
import Home from '../Home';
import Login from '../Login';
import TabScreens from '../TabScreens';
import DrawerScreens from '../DrawerScreens';
import styles from './style';

const { routes } = constants;

const Stack = createStackNavigator();

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.wrap}>
        <Stack.Navigator>
          <Stack.Screen name={routes.Home} component={Home} />
          <Stack.Screen name={routes.Login} component={Login} />
          <Stack.Screen name={routes.TabScreens} component={TabScreens} />
          <Stack.Screen name={routes.DrawerScreens} component={DrawerScreens} />
        </Stack.Navigator>
      </View>
    );
  }
}

export default Root;
