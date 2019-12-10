import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setLocalLoginToken } from 'actions/users';
import { refreshToken } from 'services/UserService';
import Loader from 'components/Loader';
import { func, oneOfType, arrayOf, node } from 'prop-types';

// fetch an access token and store it in memory
// thus we are xss and csrf safe
const TokenRefresher = ({ setLoginToken, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            response: { token },
          },
        } = await refreshToken();
        setLoginToken(token);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  });

  return <Loader loading={loading}>{children}</Loader>;
};

TokenRefresher.propTypes = {
  setLoginToken: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default connect(null, {
  setLoginToken: setLocalLoginToken,
})(TokenRefresher);
