import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { history } from 'lib/store';
import Login from 'pages/Login';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
