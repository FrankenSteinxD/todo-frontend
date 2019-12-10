import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Redirect } from 'react-router-dom';

import { history } from 'lib/store';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ThanksForRegistering from 'pages/ThanksForRegistering';
import GuestRoute from 'components/GuestRoute';
import PrivateRoute from 'components/PrivateRoute';
import Dashboard from 'pages/Dashboard';

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute
        exact
        path="/users/thanks_for_registering"
        component={ThanksForRegistering}
      />
      <GuestRoute exact path="/users/register" component={Register} />
      <GuestRoute exact path="/users/login" component={Login} />

      <PrivateRoute exact path="/" component={Dashboard} />
      <Redirect to="/users/login" />
    </Switch>
  </ConnectedRouter>
);

export default Router;
