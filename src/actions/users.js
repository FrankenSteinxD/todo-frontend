import { registerWithEmail as basicRegister } from 'services/UserService';

export function registerWithEmail(data) {
  return async () => {
    const response = await basicRegister(data);
    return response;
  };
}
