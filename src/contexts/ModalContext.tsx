import React, { createContext, useState, useCallback  } from 'react';


interface IModalContext {
  scheduleToggle: boolean;
  professionalReviewToggle: boolean;
  handleScheduleToggle: () => void;
  handleProfessionalReviewToggle: () => void;
}

export const ModalContext = createContext({} as IModalContext);

const ModalContextProvider: React.FC = ({ children }) => {
  const [scheduleToggle, setScheduleToggle] = useState(false);
  const [professionalReviewToggle, setProfessionalReviewToggle] = useState(false);

  const handleScheduleToggle = useCallback(() => {
    setScheduleToggle(!scheduleToggle);
  }, []);

  const handleProfessionalReviewToggle = useCallback(() => {
    setProfessionalReviewToggle(!professionalReviewToggle);
  }, []);

  return (
    <ModalContext.Provider value={
      { scheduleToggle, professionalReviewToggle, handleScheduleToggle, handleProfessionalReviewToggle }
    }>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;