import React, { useCallback } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { bool, func, instanceOf } from 'prop-types';

const UserMenu = ({ open, handleClose, anchorEl, navigate, logout }) => {
  const handleClick = useCallback(
    ({ target }) => {
      const action = target.getAttribute('data-action');
      if (action === 'logout') {
        logout();
      } else if (action) {
        navigate(action);
      }
    },
    [navigate, logout],
  );

  return (
    <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
      <MenuItem data-action="logout" onClick={handleClick}>
        Logout
      </MenuItem>
    </Menu>
  );
};

UserMenu.defaultProps = {
  open: false,
  anchorEl: null,
};

UserMenu.propTypes = {
  open: bool,
  handleClose: func.isRequired,
  navigate: func.isRequired,
  logout: func.isRequired,
  anchorEl: instanceOf(Element),
};

export default UserMenu;
