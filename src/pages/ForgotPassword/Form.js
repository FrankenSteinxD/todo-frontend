import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

import TextField from 'components/FormikTextField';
import ErrorMessage from 'components/FormikErrorMessage';
import { func } from 'prop-types';

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
});

const Form = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={formSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, isSubmitting }) => (
        <FormikForm className={classes.form}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Send Restoration Email
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  onSubmit: func.isRequired,
};

export default Form;
