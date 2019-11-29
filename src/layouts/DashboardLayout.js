import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import GuestLayout from './GuestLayout';
import Navbar from './DashboardLayout/Navbar';
import Footer from 'components/Footer';

const DashboardLayout = ({ children }) => (
  <>
    <Navbar />
    <main>
      <CssBaseline />
      <Container>
        <Box minHeight="75vh">{children}</Box>
      </Container>
      <Footer />
    </main>
  </>
);

DashboardLayout.propTypes = {
  ...GuestLayout.propTypes,
};

export default DashboardLayout;
