import * as TodoService from 'services/TodoService';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export function getTodos() {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS });
    try {
      const {
        data: { response },
      } = await TodoService.getTodos();
      dispatch({ type: GET_TODOS_SUCCESS, payload: response.todos });
      return response.todos;
    } catch (e) {
      dispatch({ type: GET_TODOS_FAILED });
    }
  };
}

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export function createTodo(data) {
  return async (dispatch) => {
    const {
      data: {
        response: { todo },
      },
    } = await TodoService.createTodo(data);
    dispatch({ type: CREATE_TODO_SUCCESS, payload: todo });
    return todo;
  };
}

export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';
export function completeTodo(id) {
  return async (dispatch) => {
    const {
      data: {
        response: { todo },
      },
    } = await TodoService.completeTodo(id);
    dispatch({ type: COMPLETE_TODO_SUCCESS, payload: todo });
    return todo;
  };
}

export const TRASH_TODO_SUCCESS = 'TRASH_TODO_SUCCESS';
export function trashTodo(id) {
  return async (dispatch) => {
    const {
      data: {
        response: { todo },
      },
    } = await TodoService.trashTodo(id);
    dispatch({ type: TRASH_TODO_SUCCESS, payload: todo });
    return todo;
  };
}

export const RESTORE_TODO_SUCCESS = 'RESTORE_TODO_SUCCESS';
export function restoreTodo(id) {
  return async (dispatch) => {
    const {
      data: {
        response: { todo },
      },
    } = await TodoService.restoreTodo(id);
    dispatch({ type: RESTORE_TODO_SUCCESS, payload: todo });
    return todo;
  };
}

export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export function deleteTodo(id) {
  return async (dispatch) => {
    const {
      data: {
        response: { todo },
      },
    } = await TodoService.deleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: todo });
    return todo;
  };
}
