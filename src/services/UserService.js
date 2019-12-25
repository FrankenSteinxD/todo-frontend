import axios from 'axios';

import { API_URL } from 'config';

export function registerWithEmail(data) {
  return axios.post(`${API_URL}/users/register/basic`, data);
}

export function loginWithEmail(data) {
  return axios.post(`${API_URL}/users/login/basic`, data);
}

export function sendRestorePasswordEmail(data) {
  return axios.post(`${API_URL}/users/password/forgot`, data);
}

export function resetPassword(data) {
  return axios.post(`${API_URL}/users/password/reset`, data);
}

export function refreshToken() {
  return axios.get(`${API_URL}/users/refresh_token`);
}

export function logout() {
  return axios.get(`${API_URL}/users/logout`);
}
