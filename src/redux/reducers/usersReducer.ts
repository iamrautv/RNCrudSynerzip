import { constants } from '../../config';
import * as T from '../types/appDataTypes';

const { reduxConst } = constants;
const {
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_ERROR,
  USERS_DELETE,
  USERS_SAVE,
  USERS_EDIT
} = reduxConst;

const INITIAL_DATA: T.AppDataInit = {
  loading: false,
  error: false,
  data: {}
};

const usersReducer = (state = INITIAL_DATA, action: T.Action): T.AppDataInit => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };

    case USERS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.data
      };

    case USERS_DELETE:
      return {
        loading: false,
        error: false,
        data: state.data.filter((item) => item.id !== action.id)
      };

    case USERS_SAVE:
      return {
        loading: false,
        error: false,
        data: [...state.data, action.data]
      };

    case USERS_EDIT:
      return {
        loading: false,
        error: false,
        data: state.data.map((item) => {
          if (item.id === action.data.id) {
            return {
              ...item,
              name: action.data.name,
              email: action.data.email,
              phone: action.data.phone,
            }
          }
          return item;
        })
      };

    case USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default usersReducer;
