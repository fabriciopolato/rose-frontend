import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { ReviewCard, Modal, Button } from '../../components';

import {
  Container, Triangle, ProfessionalReviewsHiddenContent, BackgroundImage,
} from './styles';

import bgReview from '../../assets/bg-login.svg';
import { ReactComponent as Star } from '../../assets/review-star.svg';

import { ModalContext } from '../../contexts/ModalContext';
import { ProfessionalContext } from '../../contexts/ProfessionalContext';

import { getUserFromLocalStorage } from '../../services/localStorage';
import { UserContext } from '../../contexts/UserContext';

interface IParams {
  id: string;
}

const ProfessionalReview: React.FC = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [reviewHeight, setReviewHeight] = useState(0);

  const {
    reviewTextArea,
    starReview,
    professionalReviews,
    handleProfessionalReview,
    handleReviewTextArea,
    handleStarReview,
    handleSubmitReview,
  } = useContext(ProfessionalContext);

  const { professionalReviewToggle, handleProfessionalReviewToggle } = useContext(ModalContext);

  const { user, handleUser } = useContext(UserContext);

  const { id } = useParams() as IParams;

  const { black, salmon, orange } = useTheme();

  const reviewElement = useRef({} as HTMLDivElement);

  useEffect(() => {
    const element = reviewElement.current;
    const parentStyles = getComputedStyle(element);

    let totalHeight = parseInt(parentStyles.paddingBottom, 10);

    element.childNodes.forEach(child => {
      const isNotAnElement = Object.keys(child).length === 1
      if (isNotAnElement) {
        return
      }
      const childStyles = getComputedStyle(child as HTMLElement);
      totalHeight += parseInt(childStyles.height, 10) + parseInt(childStyles.marginBottom, 10);
    });

    setReviewHeight(totalHeight);
  }, [isReviewsOpen, professionalReviews]);

  useEffect(() => {
    handleProfessionalReview(id);
    const patientId = getUserFromLocalStorage();
    if (patientId) {
      handleUser(patientId);
    }
  }, [handleProfessionalReview, id]);

  const handleReviewsDropdown = () => {
    setIsReviewsOpen(!isReviewsOpen);
  };

  const hasPatientAlreadyReviewedProfessional = () => {
    const foundReview = professionalReviews.find(review => {
      // const patientId = getUserFromLocalStorage();
      if (user) {
        return (review.patient._id === JSON.parse(user));
      }

      return false;
    });

    return !!foundReview;
  };

  return (
    <>
      <Container>
        <div>
          <h2>Avaliações</h2>
          <Triangle onClick={handleReviewsDropdown} isReversed={isReviewsOpen} />
        </div>
        <ProfessionalReviewsHiddenContent
          ref={reviewElement}
          height={reviewHeight}
          isOpen={isReviewsOpen}
        >

          {user && !hasPatientAlreadyReviewedProfessional() && (
            <p onClick={handleProfessionalReviewToggle}>
              <u>Avalie o profissional</u>
            </p>
          )}

          {professionalReviews.map((review, index) => (
            index % 2 === 0 ? (
              <ReviewCard isLeft key={review._id} review={review} />
            ) : (
              <ReviewCard key={review._id} review={review} />
            )
          ))}

        </ProfessionalReviewsHiddenContent>
      </Container>
      <Modal
        closeIconLeft
        id="review"
        handleToggle={handleProfessionalReviewToggle}
        toggle={professionalReviewToggle}
      >
        <BackgroundImage src={bgReview} alt="Flores Rose" />

        <h2>
          Avalie o
          {' '}
          <br />
          Profissional
        </h2>

        <div>
          <span>Fabiana Guedes</span>
          <div>
            <Star
              onClick={() => handleStarReview(1)}
              color={orange}
              fill={starReview >= 1 ? orange : 'none'}
            />
            <Star
              onClick={() => handleStarReview(2)}
              color={orange}
              fill={starReview >= 2 ? orange : 'none'}
            />
            <Star
              onClick={() => handleStarReview(3)}
              color={orange}
              fill={starReview >= 3 ? orange : 'none'}
            />
            <Star
              onClick={() => handleStarReview(4)}
              color={orange}
              fill={starReview >= 4 ? orange : 'none'}
            />
            <Star
              onClick={() => handleStarReview(5)}
              color={orange}
              fill={starReview >= 5 ? orange : 'none'}
            />
          </div>
        </div>

        <label htmlFor="testimonial">
          Depoimento:
          <textarea
            value={reviewTextArea}
            onChange={handleReviewTextArea}
            name="testimonial"
            id="testimonial"
            maxLength={200}
            placeholder="Máximo 200 caracteres"
          />
        </label>
        <Button
          onClick={() => handleSubmitReview(starReview, reviewTextArea, id)}
          backgroundColor={salmon}
          backgroundColorOnHover={salmon}
          textColor={black}
          textColorOnHover={black}
        >
          Enviar Avaliação
        </Button>
      </Modal>
    </>
  );
};

export default ProfessionalReview;
