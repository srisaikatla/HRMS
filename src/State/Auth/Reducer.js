
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  GET_ALL_CUSTOMERS_SUCCESS,
  EMPLOYEE_LOGIN_REQUEST,
  GET_EMPLOYEE_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  GET_EMPLOYEE_SUCCESS,
  EMPLOYEE_LOGIN_FAILURE,
  GET_EMPLOYEE_FAILURE,
} from './ActionType';

const initialState = {
  user: null,
  employee: null,
  isLoading: false,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case EMPLOYEE_LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_EMPLOYEE_REQUEST:
      return { ...state, isLoading: true, error: null }
    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, hrJwt: action.payload };
    case EMPLOYEE_LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, employeeJwt: action.payload };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.payload,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        employee: action.payload,
      }
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case EMPLOYEE_LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_EMPLOYEE_FAILURE:
      return { ...state, isLoading: false, error: action.playload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
