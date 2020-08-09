import {
  put,
  takeEvery
} from 'redux-saga/effects';
import { constants } from '../../config';

const { reduxConst } = constants;
const {
  APP_DATA_SET,
  APP_DATA_LOADING,
  APP_DATA_SUCCESS,
  APP_DATA_ERROR
} = reduxConst;

function* setAppData({ appData, promise }) {
  try {
    yield put({
      type: APP_DATA_LOADING
    });
    yield put({
      type: APP_DATA_SUCCESS,
      appData
    });
    promise.resolve();
  } catch (err) {
    yield put({
      type: APP_DATA_ERROR
    });
    promise.reject();
  }
}

function* setAppDataSaga() {
  yield takeEvery(APP_DATA_SET, setAppData);
}

export default setAppDataSaga;
