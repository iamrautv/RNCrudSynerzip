import * as T from '../types/appDataTypes';
import { constants } from '../../config';

const { reduxConst } = constants;
const {
  USERS_GET_INIT,
  USERS_DELETE_INIT,
  USERS_SAVE_INIT,
  USERS_EDIT_INIT
} = reduxConst;

/**
 * Set app data
 * @param  {function} dispatch the action to redux-saga
 * @param  {Object}   appData is data to be set
 * @return {object}   Object with promise and list of page content
 */
const getUsers = (dispatch) => new Promise((resolve, reject) => {
  dispatch({
    type: USERS_GET_INIT,
    promise: { resolve, reject }
  });
});

const deleteUser = (id, dispatch) => new Promise((resolve, reject) => {
  dispatch({
    type: USERS_DELETE_INIT,
    id,
    promise: { resolve, reject }
  });
});

const createUser = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch({
    type: USERS_SAVE_INIT,
    data,
    promise: { resolve, reject }
  });
});

const editUser = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch({
    type: USERS_EDIT_INIT,
    data,
    promise: { resolve, reject }
  });
});

export {
  getUsers,
  deleteUser,
  createUser,
  editUser
};
