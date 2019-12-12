import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { func } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Text from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import Link from '@material-ui/core/Link';
import EmailOutlined from '@material-ui/icons/EmailOutlined';

import * as UserActions from 'actions/users';
import { formatTodoError } from 'lib/util';
import GuestLayout from 'layouts/GuestLayout';
import FormHeader from 'components/FormHeader';
import Form from './ForgotPassword/Form';

const LoginLink = React.forwardRef((props, ref) => (
  <RouterLink to="/users/login" innerRef={ref} {...props} />
));

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
}));

const ForgotPassword = ({ sendRestorePasswordEmail }) => {
  const [done, setDone] = useState(false);
  const classes = useStyles();

  const handleSubmit = useCallback(
    (data, form) => {
      (async () => {
        try {
          await sendRestorePasswordEmail(data);
          setDone(true);
          form.resetForm();
        } catch (e) {
          const errors = formatTodoError(e);
          form.setErrors(errors);
        }
      })();
    },
    [sendRestorePasswordEmail],
  );

  return (
    <GuestLayout>
      <div className={classes.paper}>
        {done ? (
          <>
            <Text className={classes.successTitle} variant="h3">
              Success
            </Text>
            <Text className={classes.successDescription} variant="body2">
              We have sent you an email to restore your password
            </Text>
          </>
        ) : (
          <>
            <FormHeader title="Restore Password" icon={EmailOutlined} />
            <Form onSubmit={handleSubmit} />
          </>
        )}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link component={LoginLink}>Return to Login</Link>
      </div>
    </GuestLayout>
  );
};

ForgotPassword.propTypes = {
  sendRestorePasswordEmail: func.isRequired,
};

export default connect(null, {
  sendRestorePasswordEmail: UserActions.sendRestorePasswordEmail,
})(ForgotPassword);
