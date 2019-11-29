import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import './index.css';
import App from './App';
import configureStore from 'lib/store';
import * as serviceWorker from './serviceWorker';
import { setLocalLoginToken, LOGIN_USER_SUCCESS } from 'actions/users';

const store = configureStore();
const token = localStorage.getItem('loginToken');
if (token !== null) {
  setLocalLoginToken(token);
  store.dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { user: jwtDecode(token) },
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
