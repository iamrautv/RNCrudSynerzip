import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { constants } from '../../config';
import apiRequest from '../../services';

const { reduxConst, apiUrls } = constants;
const {
  USERS_GET_INIT,
  USERS_GET,
  USERS_SAVE_INIT,
  USERS_SAVE,
  USERS_EDIT_INIT,
  USERS_EDIT,
  USERS_DELETE_INIT,
  USERS_DELETE,
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_ERROR,
} = reduxConst;

function* getUsers({ promise }) {
  try {
    yield put({
      type: USERS_LOADING
    });
    const usersData = yield call(apiRequest, 'GET', {}, apiUrls.getUsers);
    yield put({
      type: USERS_SUCCESS,
      data: usersData
    });
    promise.resolve();
  } catch (err) {
    console.log({ err });
    yield put({
      type: USERS_ERROR
    });
    promise.reject();
  }
}

function* getUsersSaga() {
  yield takeEvery(USERS_GET_INIT, getUsers);
}

function* deleteUser({ id, promise }) {
  try {
    yield put({
      type: USERS_LOADING
    });
    yield call(apiRequest, 'DELETE', {}, apiUrls.deleteUsers(id));
    yield put({
      type: USERS_DELETE,
      id
    });
    promise.resolve();
  } catch (err) {
    console.log({ err });
    yield put({
      type: USERS_ERROR
    });
    promise.reject();
  }
}

function* deleteUserSaga() {
  yield takeEvery(USERS_DELETE_INIT, deleteUser);
}

function* createUser({ data, promise }) {
  try {
    yield put({
      type: USERS_LOADING
    });
    yield call(apiRequest, 'POST', data, apiUrls.saveUsers);
    yield put({
      type: USERS_SAVE,
      data
    });
    promise.resolve();
  } catch (err) {
    console.log({ err });
    yield put({
      type: USERS_ERROR
    });
    promise.reject();
  }
}

function* createUserSaga() {
  yield takeEvery(USERS_SAVE_INIT, createUser);
}

function* editUser({ data, promise }) {
  try {
    yield put({
      type: USERS_LOADING
    });
    yield call(apiRequest, 'PUT', data, apiUrls.editUsers(data.id));
    yield put({
      type: USERS_EDIT,
      data
    });
    promise.resolve();
  } catch (err) {
    console.log({ err });
    yield put({
      type: USERS_ERROR
    });
    promise.reject();
  }
}

function* editUserSaga() {
  yield takeEvery(USERS_EDIT_INIT, editUser);
}

export {
  getUsersSaga,
  deleteUserSaga,
  createUserSaga,
  editUserSaga
};
