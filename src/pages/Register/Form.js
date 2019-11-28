import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
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

const RegisterForm = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={onSubmit}
      initialValues={{ email: '', password: '' }}
    >
      {({ touched, errors, handleSubmit }) => (
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
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/users/forgot_password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/users/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  onSubmit: func.isRequired,
};

export default RegisterForm;
