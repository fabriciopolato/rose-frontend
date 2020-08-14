import React, { createContext, useState, useContext } from 'react';
import { Professional, fetchCreateReview } from '../services/api';
import { ModalContext } from './ModalContext';
import { getUserFromLocalStorage } from '../services/localStorage';


//professional
//campo de review - textarea / rate



interface IProfessionalContext {
  professional: Professional;
  handleProfessional: (professional: Professional) => void
  handleSubmitReview: (starReview: number, reviewTextArea: string, id: string) => void
}

export const ProfessionalContext = createContext({} as IProfessionalContext);

const ProfessionalContextProvider: React.FC = ({ children }) => {
  const [professional, setProfessional] = useState({} as Professional);
  const { handleScheduleToggle, handleProfessionalReviewToggle } = useContext(
    ModalContext
  );


  const handleProfessional = (professional: Professional) => {
    setProfessional(professional)
  }

  const handleSubmitReview = async (starReview: number, reviewTextArea: string, id: string) => {
    const reviewData = {
      psychologistId: id,
      patientId: JSON.parse(getUserFromLocalStorage()!),
      rate: starReview,
      description: reviewTextArea,
    };

    try {
      await fetchCreateReview(reviewData);
      handleProfessionalReviewToggle();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <ProfessionalContext.Provider value={
      { professional, handleProfessional, handleSubmitReview }
    }>
      {children}
    </ProfessionalContext.Provider>
  );
};

export default ProfessionalContextProvider;
