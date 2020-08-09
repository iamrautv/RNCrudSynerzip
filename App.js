import React from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/configureStrore';
import Root from './src/components/screen/Root';
import { globalStyles } from './src/config';

const App: () => React$Node = () => (
  <NavigationContainer dcaTest="NavigationContainer">
    <StatusBar barStyle="dark-content" />
    <View style={{ ...globalStyles.flex(1) }}>
      <Provider store={store}>
        <Root />
      </Provider>
    </View>
  </NavigationContainer>
);

export default App;
