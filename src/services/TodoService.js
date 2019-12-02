import axios from 'axios';
import { API_URL } from 'config';

export function getTodos() {
  return axios.get(`${API_URL}/todos`);
}

export function createTodo(data) {
  return axios.post(`${API_URL}/todos`, data);
}
