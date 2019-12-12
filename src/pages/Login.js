import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { func } from 'prop-types';

import Box from '@material-ui/core/Box';
import LockOutlined from '@material-ui/icons/LockOutlined';

import { loginWithEmail as basicRegister } from 'actions/users';
import { formatTodoError } from 'lib/util';
import GuestLayout from 'layouts/GuestLayout';
import FormHeader from 'components/FormHeader';
import Alert from 'components/Alert';
import Form from './Login/Form';
import Links from './Login/Links';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Login = ({ loginWithEmail, navigate }) => {
  const [formError, setFormError] = useState(null);
  const classes = useStyles();

  const handleSubmit = useCallback(
    (data, form) => {
      (async () => {
        setFormError(null);
        try {
          await loginWithEmail(data);
          navigate('/');
        } catch (e) {
          const errors = formatTodoError(e);
          form.setErrors(errors);
          if (errors.form) setFormError(errors.form);
        }
      })();
    },
    [loginWithEmail, navigate],
  );

  return (
    <GuestLayout>
      <div className={classes.paper}>
        <FormHeader title="Login" icon={LockOutlined} />
        {formError ? (
          <Box pt={2} width="100%">
            <Alert variant="error" message={formError} />
          </Box>
        ) : null}
        <Form onSubmit={handleSubmit} />
        <Links />
      </div>
    </GuestLayout>
  );
};

Login.propTypes = {
  loginWithEmail: func.isRequired,
  navigate: func.isRequired,
};

export default connect(null, {
  navigate: push,
  loginWithEmail: basicRegister,
})(Login);
