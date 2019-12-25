import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { func } from 'prop-types';

import AccountBoxIcon from '@material-ui/icons/AccountBoxOutlined';

import { registerWithEmail as basicRegister } from 'actions/users';
import { formatTodoError } from 'lib/util';
import GuestLayout from 'layouts/GuestLayout';
import FormHeader from 'components/FormHeader';
import Form from './Register/Form';
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
      return (async () => {
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
        <FormHeader title="Register" icon={AccountBoxIcon} />
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
