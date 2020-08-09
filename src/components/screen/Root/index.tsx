import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../../../config';
import Users from '../Users';
import UserInfo from '../UserInfo';
import UserCreate from '../UserCreate';
import UserEdit from '../UserEdit';
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
          <Stack.Screen name={routes.Users} component={Users} />
          <Stack.Screen name={routes.UserInfo} component={UserInfo} />
          <Stack.Screen name={routes.UserCreate} component={UserCreate} />
          <Stack.Screen name={routes.UserEdit} component={UserEdit} />
        </Stack.Navigator>
      </View>
    );
  }
}

export default Root;
