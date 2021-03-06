import React, {
  createContext, useState, useContext, ChangeEvent, useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';

import { ModalContext } from './ModalContext';

import {
  Professional,
  fetchCreateReview,
  IProfesionalReview,
  fetchProfessionalReviews,
  fetchOneProfessional,
} from '../services/api';

import { getUserFromLocalStorage } from '../services/localStorage';

interface IProfessionalContext {
  professional: Professional;
  reviewTextArea: string;
  starReview: number;
  professionalReviews: IProfesionalReview[];
  handleProfessional: (id: string) => void;
  handleSubmitReview: (starReview: number, reviewTextArea: string, id: string) => void;
  handleReviewTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStarReview: (rate: number) => void;
  handleProfessionalReview: (id: string) => void;
}

export const ProfessionalContext = createContext({} as IProfessionalContext);

const ProfessionalContextProvider: React.FC = ({ children }) => {
  const [professional, setProfessional] = useState({} as Professional);
  const [reviewTextArea, setReviewTextArea] = useState('');
  const [starReview, setStarReview] = useState(0);
  const [professionalReviews, setProfessionalReviews] = useState<IProfesionalReview[]>([]);

  const { handleProfessionalReviewToggle } = useContext(
    ModalContext,
  );

  const history = useHistory();

  const handleReviewTextArea = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewTextArea(event.target.value);
  }, []);

  const handleStarReview = useCallback((rate: number) => {
    setStarReview(rate);
  }, []);

  const handleProfessional = useCallback(async (id: string) => {
    try {
      const response = await fetchOneProfessional(id);
      setProfessional(response.data);
    } catch (error) {
      history.push('busque-profissionais');
      console.error(error);
    }
  }, [history]);

  const handleProfessionalReview = useCallback(async (id: string) => {
    try {
      const response = await fetchProfessionalReviews(id);
      setProfessionalReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSubmitReview = useCallback(
    async (rate: number, description: string, id: string) => {
      const reviewData = {
        psychologistId: id,
        patientId: JSON.parse(getUserFromLocalStorage()!),
        rate,
        description,
      };

      try {
        await fetchCreateReview(reviewData);
        handleProfessionalReviewToggle();
        handleStarReview(0);
        setReviewTextArea('');

        const response = await fetchProfessionalReviews(id);
        setProfessionalReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    }, [handleProfessionalReviewToggle, handleStarReview],
  );

  return (
    <ProfessionalContext.Provider value={{
      professional,
      reviewTextArea,
      starReview,
      professionalReviews,
      handleProfessional,
      handleSubmitReview,
      handleReviewTextArea,
      handleStarReview,
      handleProfessionalReview,
    }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};

export default ProfessionalContextProvider;
