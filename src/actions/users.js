import axios from 'axios';

import {
  registerWithEmail as basicRegister,
  loginWithEmail as basicLogin,
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
    setLocalLoginToken(token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: response.data.response,
    });
    return response;
  };
}

export function setLocalLoginToken(token) {
  localStorage.setItem('loginToken', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeLocalLoginToken() {
  localStorage.removeItem('loginToken');
  delete axios.defaults.headers.common.Authorization;
}
