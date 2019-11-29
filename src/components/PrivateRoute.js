import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

const PrivateRoute = ({ isAuthenticated, ...props }) =>
  isAuthenticated ? <Route {...props} /> : <Redirect to="/users/login" />;

PrivateRoute.propTypes = {
  isAuthenticated: bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
