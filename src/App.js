import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { history } from 'lib/store';
import Register from 'pages/Register';
import ThanksForRegistering from 'pages/ThanksForRegistering';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/users/thanks_for_registering"
          component={ThanksForRegistering}
        />
        <Route exact path="/users/register" component={Register} />
        <Redirect to="/users/register" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
