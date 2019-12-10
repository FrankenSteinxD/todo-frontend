import axios from 'axios';

import {
  registerWithEmail as basicRegister,
  loginWithEmail as basicLogin,
  logout as logoutRemotely,
} from 'services/UserService';

export function registerWithEmail(data) {
  return async () => {
    const response = await basicRegister(data);
    return response;
  };
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export function loginWithEmail(data) {
  return async (dispatch) => {
    const response = await basicLogin(data);
    const { token } = response.data.response;
    // eslint-disable-next-line no-use-before-define
    dispatch(setLocalLoginToken(token));
    return response;
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await logoutRemotely();
      // eslint-disable-next-line no-use-before-define
      dispatch(removeLocalLoginToken());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
}

export const SET_LOGIN_TOKEN = 'SET_LOGIN_TOKEN';
export function setLocalLoginToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: SET_LOGIN_TOKEN,
    payload: token,
  };
}

export const REMOVE_LOGIN_TOKEN = 'REMOVE_LOGIN_TOKEN';
export function removeLocalLoginToken() {
  delete axios.defaults.headers.common.Authorization;
  return {
    type: REMOVE_LOGIN_TOKEN,
  };
}
