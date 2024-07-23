/* eslint-disable no-unused-vars */
import axios from 'axios';
import { API_BASE_URL } from '../../Config/api';
import {
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  EMAIL_EXISTS,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE
} from './ActionType';

const token = localStorage.getItem('jwt');


// Action creators for registering a user
export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });
export const emailExists = () => ({ type: EMAIL_EXISTS });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    dispatch(registerSuccess());
    alert('OTP sent successfully. Please check your email to verify.');
  } catch (error) {
    // Handle other errors
    console.error('Error during registration:', error);
    dispatch(registerFailure('An error occurred during registration.'));
    alert('Email is already registered. Please use a different email.')
  }
};

// Action creators for verifying OTP
export const verifyOtpRequest = () => ({ type: VERIFY_OTP_REQUEST });
export const verifyOtpSuccess = (user) => ({ type: VERIFY_OTP_SUCCESS, payload: user });
export const verifyOtpFailure = (error) => ({ type: VERIFY_OTP_FAILURE, payload: error });

export const verifyOtp = (otpData) => async (dispatch) => {
  dispatch(verifyOtpRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, otpData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    dispatch(verifyOtpSuccess(user.jwt));
  } catch (error) {
    dispatch(verifyOtpFailure(error.message));
  }
};



const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest);

  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/signin`, userData);
    const user = response.data;
    if (user.token) {
      localStorage.setItem('token1', user.token);

    }
    dispatch(loginSuccess(user.token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const getAllCustomers = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CUSTOMERS_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/users`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const users = response.data;
      dispatch({ type: GET_ALL_CUSTOMERS_SUCCESS, payload: users });
      console.log("All Customers", users)
    } catch (error) {
      const errorMessage = error.message;
      console.log(error)
      dispatch({ type: GET_ALL_CUSTOMERS_FAILURE, payload: errorMessage });
    }
  };
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };
};
