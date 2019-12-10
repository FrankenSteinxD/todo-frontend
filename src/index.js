import React from 'react';
import ReactDOM from 'react-dom';
// import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
// import configureStore from 'lib/store';
import * as serviceWorker from './serviceWorker';
// import { setLocalLoginToken, LOGIN_USER_SUCCESS } from 'actions/users';
import { configureAxios } from 'lib/setup';

configureAxios();

toast.configure();
// const store = configureStore();
// const token = localStorage.getItem('loginToken');
// if (token !== null) {
//   setLocalLoginToken(token);
//   store.dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: { user: jwtDecode(token) },
//   });
// }

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
