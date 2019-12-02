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
