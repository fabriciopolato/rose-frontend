const TOKEN_KEY = 'ROSE_TOKEN';

export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};
