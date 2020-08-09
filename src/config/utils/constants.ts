/**
 * @fileoverview All the static texts used in the application
 * is declared as contant in this file.
 * @package
 */

const constants = {
  reduxConst: {
    USERS_GET_INIT: 'USERS_GET_INIT',
    USERS_GET: 'USERS_GET',

    USERS_SAVE_INIT: 'USERS_SAVE_INIT',
    USERS_SAVE: 'USERS_SAVE',

    USERS_EDIT_INIT: 'USERS_EDIT_INIT',
    USERS_EDIT: 'USERS_EDIT',

    USERS_DELETE_INIT: 'USERS_DELETE_INIT',
    USERS_DELETE: 'USERS_DELETE',

    USERS_LOADING: 'USERS_LOADING',
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_ERROR: 'USERS_ERROR',
  },
  routes: {
    Home: 'Home',
    Users: 'Users',
    UserInfo: 'UserInfo',
    UserCreate: 'UserCreate',
    UserEdit: 'UserEdit',
  },
  statusCodes: {
    success: 200,
    notFound: 404,
    invalid: 401
  },
  buttonTypes: {
    primary: 'primary',
  },
  apiUrls: {
    getUsers: 'https://jsonplaceholder.typicode.com/users/',
    saveUsers: `https://jsonplaceholder.typicode.com/users/`,
    editUsers: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
    deleteUsers: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
  }
};

export default constants;
