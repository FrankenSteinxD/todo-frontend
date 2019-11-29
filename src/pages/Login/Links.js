import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const ForgotLink = React.forwardRef((props, ref) => (
  <RouterLink to="/users/forgot_password" innerRef={ref} {...props} />
));

const RegisterLink = React.forwardRef((props, ref) => (
  <RouterLink to="/users/register" innerRef={ref} {...props} />
));

const Links = () => (
  <Grid container>
    <Grid item xs>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link component={ForgotLink} variant="body2">
        Forgot password?
      </Link>
    </Grid>
    <Grid item>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link component={RegisterLink} variant="body2">
        No Account ? Register
      </Link>
    </Grid>
  </Grid>
);

export default Links;
