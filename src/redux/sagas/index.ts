/**
 * @fileoverview This file contains configuration of
 * all redux saga middlewares
 * @package
 */
import { all } from 'redux-saga/effects';
import {
  getUsersSaga,
  deleteUserSaga,
  createUserSaga,
  editUserSaga,
} from './usersSaga';

function* rootSaga() {
  yield all([
    getUsersSaga(),
    deleteUserSaga(),
    createUserSaga(),
    editUserSaga(),
  ]);
}

export default rootSaga;
