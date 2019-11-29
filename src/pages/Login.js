import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { func } from 'prop-types';
import Box from '@material-ui/core/Box';

import GuestLayout from 'layouts/GuestLayout';
import Alert from 'components/Alert';
import { loginWithEmail as basicRegister } from 'actions/users';
import { formatTodoError } from 'lib/util';
import Form from './Login/Form';
import Header from './Login/Header';
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
        <Header />
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
