import axios from 'axios';

import { API_URL } from 'config';

export function registerWithEmail(data) {
  return axios.post(`${API_URL}/users/register/basic`, data);
}

export function loginWithEmail(data) {
  return axios.post(`${API_URL}/users/login/basic`, data);
}
