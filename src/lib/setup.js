import axios from 'axios';
import { refreshToken } from 'services/UserService';
import { setLocalLoginToken, removeLocalLoginToken } from 'actions/users';
import configureStore from 'lib/store';

export function configureAxios() {
  axios.defaults.withCredentials = true;
  const store = configureStore();
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response ? error.response.status : null;

      // we don't want to retry for routes that require user login
      // such as login, register, password reset...
      // and we don't want to retry getting refresh token more than once
      const shouldRetry =
        !!error.config.headers.Authorization &&
        error.config.url.indexOf('/users/refresh_token') === -1;

      if (status === 401 && shouldRetry) {
        try {
          // try get refresh token
          const {
            data: {
              response: { token },
            },
          } = await refreshToken();
          store.dispatch(setLocalLoginToken(token));

          // retry the original request
          const newConfig = { ...error.config };
          newConfig.headers.Authorization = `Bearer ${token}`;
          return axios(newConfig);
        } catch (e) {
          store.dispatch(removeLocalLoginToken());
          window.location = '/users/login';
          return null;
        }
      } else {
        return Promise.reject(error);
      }
    },
  );
}
