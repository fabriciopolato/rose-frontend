import React, { createContext, useState, useContext, ChangeEvent } from 'react';
import { Professional, fetchCreateReview, IProfesionalReview, fetchProfessionalReviews } from '../services/api';
import { ModalContext } from './ModalContext';
import { getUserFromLocalStorage } from '../services/localStorage';


//professional
//campo de review - textarea / rate



interface IProfessionalContext {
  professional: Professional;
  reviewTextArea: string;
  starReview: number;
  professionalReviews: IProfesionalReview[];
  handleProfessional: (professional: Professional) => void;
  handleSubmitReview: (starReview: number, reviewTextArea: string, id: string) => void;
  handleReviewTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStarReview: (rate: number) => void;
  handleProfessionalReview: (professionalReviewsFromApi: IProfesionalReview[]) => void;
}

export const ProfessionalContext = createContext({} as IProfessionalContext);

const ProfessionalContextProvider: React.FC = ({ children }) => {
  const [professional, setProfessional] = useState({} as Professional);
  const [reviewTextArea, setReviewTextArea] = useState('');
  const [starReview, setStarReview] = useState(0);
  const [professionalReviews, setProfessionalReviews] = useState<IProfesionalReview[]>([]);

  const { handleProfessionalReviewToggle } = useContext(
    ModalContext
  );

  const handleReviewTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewTextArea(event.target.value);
  };

  const handleStarReview = (rate: number) => {
    setStarReview(rate);
  };

  const handleProfessional = (professional: Professional) => {
    setProfessional(professional);
  }

  const handleProfessionalReview = (professionalReviewsFromApi: IProfesionalReview[]) => {
    setProfessionalReviews(professionalReviewsFromApi);
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
      handleStarReview(0);
      setReviewTextArea('');

      const response = await fetchProfessionalReviews(id);
      console.log(response.data)
      setProfessionalReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProfessionalContext.Provider value={
      { 
        professional,
        reviewTextArea,
        starReview,
        professionalReviews,
        handleProfessional,
        handleSubmitReview,
        handleReviewTextArea,
        handleStarReview,
        handleProfessionalReview
      }
    }>
      {children}
    </ProfessionalContext.Provider>
  );
};

export default ProfessionalContextProvider;
