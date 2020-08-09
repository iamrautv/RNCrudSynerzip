# React-Native Boilerplate
This is a boilerplate for react-native project

## Installation Steps
1. Npm install: ````npm i````
2. Start packager: ````npx react-native start````
3. Android build: ````npm run android [dev/stage/prod]````
4. IOS build: ````npm run ios [dev/stage/prod]````

## Features
1. **Code validation**:
    - Code validation using eslint
    - Used airbnb code standard for code validation
    - Command: ```npm lint```
2. **Test cases**:
    - Test cases configuration using Jest and enzyme
    - Added test cases for App.js for reference
    - Command:
        - ```npm test```
        - ```npm test:watch```
    - Test cases mock for:
        - react-native-gesture-handler
        - react-navigation
3. **Predefined custom components**:
    - Button
    - Spacer
    - Loading
4. **Higher order components**: appHoc component for layout manager on scrren
5. **Navigation structure**:
    - Root stack nvigation setup
    - Tab and inner stack nvigation setup
    - Drawer and inner stack nvigation setup
6. **Redux Setup**:
    - Redux folder structure setup
    - redux-saga middleware setup
    - redux-logger middleware setup
    - appData action, saga and reducer added
7. **Config**:
    - **Libs:**
        - appObjects: Common/shared objects
        - enzymeConfig: Enzyme configuration for test cases
        - globals: App global configuration
        - helpers: Predefined helpers function added chunkArray, strToKey,manualDelay,dateWithoutTime,aspectRatio,isEmptyObject,buildHeader
        - validator: App genereic validator
    - **Utils:** App Static utils such as
        - colors
        - constants
        - globalStyles
        - icons
        - images
8. **Env**:
    - react-native-config module configured
9. **buildScripts**:
    - **androidBuild**: sh script for android build
    - **iosBuild**: sh script for android build
    - **switchEnv**: sh script for changing the build environment
10. **Api request handler**:
    - Used axios library to handle api request
    - Created generic api request handler for centralised api calling

## List of modules integrated in project
* [react-navigation](https://reactnavigation.org/) :
Routing and navigation for React Native apps
* [react-redux](https://redux.js.org/basics/usage-with-react) :
React-redux is used for managing application state
* [redux-logger](https://github.com/evgenyrodionov/redux-logger) :
Redux is used for loging application state onto our console
* [redux-saga](https://redux-saga.js.org/) :
Redux saga is used for asynchromous operations in redux actions
* [axios](https://github.com/axios/axios) :
Axois is used for api calling
* [enzyme](https://enzymejs.github.io/enzyme/) :
Enzyme is used for writing test cases with react
* [react-native-config](https://github.com/luggit/react-native-config) :
React native confige is used for getting values from .env file