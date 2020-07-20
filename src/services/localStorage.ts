const TOKEN_KEY = 'ROSE_TOKEN';
const USER_ID = 'USER_ID';

export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setUserInLocalStorage = (id: string) => {
  localStorage.setItem(USER_ID, JSON.stringify(id));
};

export const getUserFromLocalStorage = () => {
  return localStorage.getItem(USER_ID);
};
