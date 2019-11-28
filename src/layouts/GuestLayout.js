import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { node, oneOfType, arrayOf } from 'prop-types';

import Footer from 'components/Footer';

const GuestLayout = ({ children }) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <main>{children}</main>
    <Footer />
  </Container>
);

GuestLayout.defaultProps = {
  children: [],
};

GuestLayout.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

export default GuestLayout;
