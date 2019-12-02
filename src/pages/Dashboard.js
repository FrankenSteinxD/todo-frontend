import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import Todos from './Todos';
import { shape, string } from 'prop-types';

const Dashboard = ({ match: { url } }) => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={url} component={Todos} />
      </Switch>
    </DashboardLayout>
  );
};

Dashboard.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
};

export default Dashboard;
