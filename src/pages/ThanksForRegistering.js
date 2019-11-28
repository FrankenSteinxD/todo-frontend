import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import GuestLayout from 'layouts/GuestLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  title: {
    marginBottom: theme.spacing(5),
    color: green['300'],
  },
  description: {
    marginBottom: theme.spacing(5),
  },
}));

const ThanksForRegistering = () => {
  const classes = useStyles();
  return (
    <GuestLayout>
      <Box className={classes.root}>
        <Typography className={classes.title} variant="h1">
          THANKS
        </Typography>
        <Typography className={classes.description} variant="body1">
          You have successfully registered to TodoApp, please check your email
          and verify your account.
        </Typography>
        <Typography variant="body2">
          <Link href="/users/login">Back to Login</Link>
        </Typography>
      </Box>
    </GuestLayout>
  );
};

export default ThanksForRegistering;
