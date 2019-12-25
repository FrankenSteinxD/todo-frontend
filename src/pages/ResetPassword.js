import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Text from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import EmailOutlined from '@material-ui/icons/EmailOutlined';

import * as UserActions from 'actions/users';
import { formatTodoError, parseQuerytring } from 'lib/util';
import GuestLayout from 'layouts/GuestLayout';
import FormHeader from 'components/FormHeader';
import Link from 'components/Link';
import Form from './ResetPassword/Form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
  },
  successTitle: {
    marginBottom: theme.spacing(3),
    color: green['300'],
    textAlign: 'center',
  },
  successDescription: {
    marginBottom: theme.spacing(3),
    color: green['300'],
    textAlign: 'center',
  },
  failedTitle: {
    marginBottom: theme.spacing(3),
    color: red['300'],
    textAlign: 'center',
  },
  failedDescription: {
    marginBottom: theme.spacing(3),
    color: red['300'],
    textAlign: 'center',
  },
}));

const ResetPassword = ({ resetPassword, location }) => {
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const classes = useStyles();
  const [token, setToken] = useState('');

  useEffect(() => {
    const { token: t } = parseQuerytring(location.search);
    if (!t) {
      setFailed(true);
    } else {
      setToken(t);
    }
  }, [location]);

  const handleSubmit = useCallback(
    (data, form) => {
      return (async () => {
        try {
          await resetPassword({ ...data, token });
          setDone(true);
          form.resetForm();
        } catch (e) {
          if (e.response && e.response.status === 401) {
            setFailed(true);
          } else {
            const errors = formatTodoError(e);
            form.setErrors(errors);
          }
        }
      })();
    },
    [resetPassword, token],
  );

  return (
    <GuestLayout>
      <div className={classes.paper}>
        {failed && (
          <>
            <Text className={classes.failedTitle} variant="h3">
              Sorry
            </Text>
            <Text className={classes.failedDescription} variant="body2">
              Reset password code is invalid or has expired.
            </Text>
          </>
        )}
        {done && !failed && (
          <>
            <Text className={classes.successTitle} variant="h3">
              Success
            </Text>
            <Text className={classes.successDescription} variant="body2">
              Password has been reset
            </Text>
          </>
        )}
        {!done && !failed && (
          <>
            <FormHeader title="Restore Password" icon={EmailOutlined} />
            <Form onSubmit={handleSubmit} />
          </>
        )}
        <Link to="/users/login" variant="body2">
          Return to Login
        </Link>
      </div>
    </GuestLayout>
  );
};

ResetPassword.propTypes = {
  resetPassword: func.isRequired,
  location: shape({
    search: string.isRequired,
  }).isRequired,
};

export default connect(null, {
  resetPassword: UserActions.resetPassword,
})(ResetPassword);
