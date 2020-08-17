import jwtDecode from 'jwt-decode';
import { api } from './api';
import { getTokenFromLocalStorage } from './localStorage';

const isAuthenticated = () => {
  const token = getTokenFromLocalStorage();

  if (token) {
    const parsedToken = JSON.parse(token);
    api.defaults.headers.common.Authorization = `Bearer ${parsedToken}`;

    try {
      jwtDecode(parsedToken);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return false;
};

export default isAuthenticated;
