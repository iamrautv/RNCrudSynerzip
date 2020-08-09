import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../../../config';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={globalStyles.center}>
        <Text>Tab 1 - Screen1</Text>
      </View>
    );
  }
}

export default Screen1;
