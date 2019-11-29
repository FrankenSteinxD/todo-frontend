import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { func } from 'prop-types';

import GuestLayout from 'layouts/GuestLayout';
import { registerWithEmail as basicRegister } from 'actions/users';
import { formatTodoError } from 'lib/util';
import Form from './Register/Form';
import Header from './Register/Header';
import Links from './Register/Links';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Register = ({ registerWithEmail, navigate }) => {
  const classes = useStyles();

  const handleSubmit = useCallback(
    (data, form) => {
      (async () => {
        try {
          await registerWithEmail(data);
          navigate('/users/thanks_for_registering');
        } catch (e) {
          const errors = formatTodoError(e);
          form.setErrors(errors);
        }
      })();
    },
    [registerWithEmail, navigate],
  );

  return (
    <GuestLayout>
      <div className={classes.paper}>
        <Header />
        <Form onSubmit={handleSubmit} />
        <Links />
      </div>
    </GuestLayout>
  );
};

Register.propTypes = {
  registerWithEmail: func.isRequired,
  navigate: func.isRequired,
};

export default connect(null, {
  navigate: push,
  registerWithEmail: basicRegister,
})(Register);
