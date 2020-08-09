// /**
//  * Mock the @react-native-gesture-handler npm module
//  * @return {!Object<TYPE>}
//  */
jest.mock('react-native-gesture-handler', () => ({
  gestureHandlerRootHOC: () => { }
}));

/**
 * Mock all native dependancies
 * @return {!Object<TYPE>}
 */
// jest.mock('react-native', () => require('react-native-mock-render'), { virtual: true })


/**
 * Mock the @react-navigation
 * @return {!Object<TYPE>}
 */
jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: () => { }
}));
jest.mock("@react-navigation/drawer", () => ({
  createDrawerNavigator: () => { }
}));
jest.mock("@react-navigation/native", () => ({}));
jest.mock("@react-navigation/stack", () => ({
  createStackNavigator: () => { }
}));