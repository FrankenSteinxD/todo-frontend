import React from 'react';
import Grid from '@material-ui/core/Grid';

import Link from 'components/Link';

const Links = () => (
  <Grid container>
    <Grid item>
      <Link to="/users/login" variant="body2">
        Already have an account? Login
      </Link>
    </Grid>
  </Grid>
);

export default Links;
