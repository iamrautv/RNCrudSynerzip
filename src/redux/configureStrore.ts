/**
 * @fileoverview This file contains configuration of
 * redux store
 * @package
 */
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { globals } from '../config';
import rootSaga from './sagas';
import usersReducer from './reducers/usersReducer';

const { LIVE } = globals;

export const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  // eslint-disable-next-line no-undef
  predicate: () => (!LIVE ? __DEV__ : false),
  collapsed: true
});

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const configureStore = (initialState = {}) => (
  createStore(
    combineReducers({
      users: usersReducer
    }),
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  )
);

export const store = configureStore();
sagaMiddleware.run(rootSaga);
