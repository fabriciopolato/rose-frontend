import React, { createContext, useState, useCallback } from 'react';

interface IUserContext {
  user: string;
  handleUser: (userId: string) => void
}

export const UserContext = createContext({} as IUserContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState('');

  const handleUser = useCallback((userId: string) => {
    setUser(userId);
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      handleUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
