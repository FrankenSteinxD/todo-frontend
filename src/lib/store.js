import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from 'reducers';

// eslint-disable-next-line
if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'function') {
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ = (_) => (next) => (action) =>
    next(action);
}

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
}
