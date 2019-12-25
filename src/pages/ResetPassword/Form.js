import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { func } from 'prop-types';
import * as Yup from 'yup';

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
  password: Yup.string()
    .min(5)
    .max(50)
    .required(),
});

const Form = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={formSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, isSubmitting }) => (
        <FormikForm className={classes.form}>
          <TextField
            name="password"
            variant="outlined"
            margin="normal"
            label="New Password"
            type="password"
            error={touched.password && !!errors.password}
            fullWidth
            autoFocus
            required
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
            Submit
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
