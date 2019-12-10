import React from 'react';
import { Provider } from 'react-redux';

import Router from './Router';
import configureStore from 'lib/store';
import TokenRefresher from 'components/TokenRefresher';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <TokenRefresher>
      <Router />
    </TokenRefresher>
  </Provider>
);

export default App;
