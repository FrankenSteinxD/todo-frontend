import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { func } from 'prop-types';

import TextField from 'components/FormikTextField';
import ErrorMessage from 'components/FormikErrorMessage';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

const LoginForm = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={onSubmit}
      initialValues={{ email: '', password: '' }}
    >
      {({ touched, errors, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            name="email"
            variant="outlined"
            margin="normal"
            label="Email Address"
            autoComplete="email"
            error={touched.email && !!errors.email}
            fullWidth
            autoFocus
            required
          />
          <ErrorMessage name="email" />
          <TextField
            name="password"
            variant="outlined"
            margin="normal"
            label="Password"
            type="password"
            autoComplete="current-password"
            error={touched.password && !!errors.password}
            required
            fullWidth
          />
          <ErrorMessage name="password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
