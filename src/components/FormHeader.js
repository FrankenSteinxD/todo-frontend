import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { string, objectOf } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const FormHeader = ({ title, icon: Icon }) => {
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <Icon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </>
  );
};

FormHeader.propTypes = {
  title: string.isRequired,
  icon: objectOf(Symbol).isRequired,
};

export default FormHeader;
