import React, { useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { green, orange, blue } from '@material-ui/core/colors';
import { oneOf, bool, string } from 'prop-types';

const variantColors = {
  error: 'error.main',
  warning: orange[700],
  success: green[700],
  info: blue[700],
};

const variantIcons = {
  error: ErrorIcon,
  warning: WarningIcon,
  success: CheckCircleIcon,
  info: InfoIcon,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    color: theme.palette.common.white,
  },
  msgBox: {
    display: 'flex',
  },
  iconBtn: {
    padding: 0,
    color: 'inherit',
  },
}));

const Alert = ({ variant, message, icon, dismissable }) => {
  const [shown, setShown] = useState(true);
  const handleClose = useCallback(() => setShown(false), []);
  const classes = useStyles();
  const color = variantColors[variant];
  const Icon = variantIcons[variant];

  if (!shown) return null;

  return (
    <Box bgcolor={color} className={classes.wrapper}>
      <Box className={classes.msgBox}>
        {icon ? <Icon /> : null}
        <Box pr={3} pl={1}>
          <Typography variant="body1">{message}</Typography>
        </Box>
      </Box>
      {dismissable ? (
        <IconButton
          key="close"
          aria-label="close"
          onClick={handleClose}
          className={classes.iconBtn}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Box>
  );
};

Alert.defaultProps = {
  icon: true,
  dismissable: true,
};

Alert.propTypes = {
  variant: oneOf(['error', 'warning', 'info', 'success']).isRequired,
  message: string.isRequired,
  icon: bool,
  dismissable: bool,
};

export default Alert;
