import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'lib/store';
import Router from './Router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
