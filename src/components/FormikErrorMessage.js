import React from 'react';
import { ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  message: {
    color: theme.palette.error.main,
    margin: 0,
  },
}));

const FormikErrorMessage = ({ name }) => {
  const classes = useStyles();
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <p className={classes.message}>{msg}</p>}
    />
  );
};

FormikErrorMessage.propTypes = {
  name: string.isRequired,
};

export default FormikErrorMessage;
