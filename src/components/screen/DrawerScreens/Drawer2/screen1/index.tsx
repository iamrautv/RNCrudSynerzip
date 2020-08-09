import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../../../config';
import { Button } from '../../../../custom';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={globalStyles.flex(1)}>
        <View style={globalStyles.mg(20)}>
          <Button
            text="Open Drawer"
            onPress={() => { navigation.openDrawer(); }}
          />
        </View>
        <View style={globalStyles.center}>
          <Text>Drawer 2 - Screen1</Text>
        </View>
      </View>
    );
  }
}

export default Screen1;
