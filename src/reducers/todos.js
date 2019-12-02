import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  CREATE_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  TRASH_TODO_SUCCESS,
  RESTORE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
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

    case COMPLETE_TODO_SUCCESS:
    case TRASH_TODO_SUCCESS:
    case RESTORE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo,
        ),
      };

    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    }
    default:
      return state;
  }
};
