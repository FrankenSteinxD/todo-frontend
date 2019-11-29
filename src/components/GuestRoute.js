import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

const GuestRoute = ({ isAuthenticated, ...props }) =>
  isAuthenticated ? <Redirect to="/" /> : <Route {...props} />;

GuestRoute.propTypes = {
  isAuthenticated: bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

export default connect(mapStateToProps)(GuestRoute);
