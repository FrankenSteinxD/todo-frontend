import axios from 'axios';
import { API_URL } from 'config';

export function getTodos() {
  return axios.get(`${API_URL}/todos`);
}

export function createTodo(data) {
  return axios.post(`${API_URL}/todos`, data);
}

export function completeTodo(id) {
  return axios.put(`${API_URL}/todos/${id}/complete`);
}

export function trashTodo(id) {
  return axios.put(`${API_URL}/todos/${id}/trash`);
}

export function restoreTodo(id) {
  return axios.put(`${API_URL}/todos/${id}/untrash`);
}

export function deleteTodo(id) {
  return axios.delete(`${API_URL}/todos/${id}`);
}
