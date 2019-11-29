import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const LoginLink = React.forwardRef((props, ref) => (
  <RouterLink to="/users/login" innerRef={ref} {...props} />
));

const Links = () => (
  <Grid container>
    <Grid item>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link component={LoginLink} variant="body2">
        Already have an account? Login
      </Link>
    </Grid>
  </Grid>
);

export default Links;
