import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { string } from 'prop-types';

const FormikTextField = ({ name, ...others }) => (
  <Field name={name}>
    {({ field }) => <TextField {...field} {...others} />}
  </Field>
);

FormikTextField.propTypes = {
  name: string.isRequired,
};

export default FormikTextField;
