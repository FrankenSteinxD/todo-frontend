import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  CREATE_TODO_SUCCESS,
} from 'actions/todos';

const initialState = {
  todos: [],
  loading: false,
  failed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, failed: false, loading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, loading: false, failed: false, todos: action.payload };
    case GET_TODOS_FAILED:
      return { ...state, loading: false, failed: true };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};
