/**
 * @fileoverview This file contains configuration of
 * all redux saga middlewares
 * @package
 */
import { all } from 'redux-saga/effects';
import setAppDataSaga from './appDataSaga';

function* rootSaga() {
  yield all([
    setAppDataSaga()
  ]);
}

export default rootSaga;
