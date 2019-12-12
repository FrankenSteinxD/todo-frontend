import React from 'react';
import Grid from '@material-ui/core/Grid';

import Link from 'components/Link';

const Links = () => (
  <Grid container>
    <Grid item xs>
      <Link to="/users/forgot_password" variant="body2">
        Forgot password?
      </Link>
    </Grid>
    <Grid item>
      <Link to="/users/register" variant="body2">
        No Account ? Register
      </Link>
    </Grid>
  </Grid>
);

export default Links;
