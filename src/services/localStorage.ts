const TOKEN_KEY = 'ROSE_TOKEN';
const USER_ID = 'USER_ID';

export function setTokenInLocalStorage(token: string) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setUserInLocalStorage(id: string) {
  localStorage.setItem(USER_ID, JSON.stringify(id));
}

export function getUserFromLocalStorage() {
  return localStorage.getItem(USER_ID);
}
