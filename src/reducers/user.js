import { SET_LOGIN_TOKEN, REMOVE_LOGIN_TOKEN } from 'actions/users';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TOKEN:
      return {
        ...state,
        loginToken: action.payload,
        isAuthenticated: true,
      };

    case REMOVE_LOGIN_TOKEN:
      return {
        ...state,
        loginToken: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
