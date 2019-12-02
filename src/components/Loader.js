import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import Box from '@material-ui/core/Box';
import { oneOfType, func, node, arrayOf, bool, number } from 'prop-types';

const Loader = ({ loading, padding, children }) =>
  // eslint-disable-next-line no-nested-ternary
  loading ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={padding}
      pb={padding}
    >
      <BarLoader />
    </Box>
  ) : typeof children === 'function' ? (
    children()
  ) : (
    <>{children}</>
  );

Loader.defaultProps = {
  loading: false,
  children: [],
  padding: 20,
};

Loader.propTypes = {
  loading: bool,
  padding: number,
  children: oneOfType([func, node, arrayOf(node)]),
};

export default Loader;
