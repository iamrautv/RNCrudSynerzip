import * as T from '../types/appDataTypes';
import { constants } from '../../config';

const { reduxConst } = constants;
const { APP_DATA_SET } = reduxConst;

/**
 * Set app data
 * @param  {function} dispatch the action to redux-saga
 * @param  {Object}   appData is data to be set
 * @return {object}   Object with promise and list of page content
 */
const setAppData = (dispatch, appData: T.AppData): Promise<T.AppData> => new Promise((resolve, reject) => {
  dispatch({
    type: APP_DATA_SET,
    appData,
    promise: { resolve, reject }
  });
});

export default setAppData;
