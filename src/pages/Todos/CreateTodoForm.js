import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';

import TextField from 'components/FormikTextField';
import ErrorMessage from 'components/FormikErrorMessage';
import { func } from 'prop-types';

const CreateTodoForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ title: '', description: '' }} onSubmit={onSubmit}>
      {({ touched, errors, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} noValidate>
          <TextField
            name="title"
            margin="normal"
            label="Title"
            error={touched.title && !!errors.title}
            fullWidth
            autoFocus
            required
          />
          <ErrorMessage name="title" />
          <TextField
            name="description"
            margin="normal"
            label="Description"
            rows={3}
            error={touched.description && !!errors.description}
            multiline
            fullWidth
            required
          />
          <ErrorMessage name="description" />
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

CreateTodoForm.propTypes = {
  onSubmit: func.isRequired,
};

export default CreateTodoForm;
