import React from 'react';
import MUILink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { oneOfType, func, node, arrayOf } from 'prop-types';

const Link = ({ children, ...others }) => {
  const InnerLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  return (
    <MUILink {...others} component={InnerLink}>
      {children}
    </MUILink>
  );
};

Link.defaultProps = {
  children: [],
};

Link.propTypes = {
  children: oneOfType([func, node, arrayOf(node)]),
};

export default Link;
