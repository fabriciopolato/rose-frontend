import React, { createContext, useState  } from 'react';


interface IModalContext {
  scheduleToggle: boolean;
  handleToggle: () => void;
}

export const ModalContext = createContext({} as IModalContext);

const ModalContextProvider: React.FC = ({ children }) => {
  const [scheduleToggle, setScheduleToggle] = useState(false);

  const handleToggle = () => {
    setScheduleToggle(!scheduleToggle);
  };

  return (
    <ModalContext.Provider value={{ scheduleToggle, handleToggle }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;