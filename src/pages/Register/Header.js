import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBoxOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <AccountBoxIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
    </>
  );
};

export default Header;
