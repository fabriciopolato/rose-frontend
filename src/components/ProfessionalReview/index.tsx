import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Container, Triangle, ProfessionalReviewsHiddenContent, BackgroundImage } from './styles';
import { ReviewCard, Modal, Button } from '../../components';
import bgReview from '../../assets/bg-login.svg';
import { FaStar } from 'react-icons/fa';

const ProfessionalReview: React.FC = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [reviewHeight, setReviewHeight] = useState(0);
  const [toggleReview, setToggleReview] = useState(false);

  const { black, salmon } = useTheme();

  const reviewElement = useRef({} as HTMLDivElement);

  useEffect(() => {
    const element = reviewElement.current;
    const parentStyles = getComputedStyle(element);

    let totalHeight = parseInt(parentStyles.paddingBottom);

    element.childNodes.forEach(child => {
      const childStyles = getComputedStyle(child as HTMLElement);
      totalHeight += parseInt(childStyles.height) + parseInt(childStyles.marginBottom);
    });

    setReviewHeight(totalHeight);
  }, [isReviewsOpen]);

  const handleReviewsDropdown = () => {
    setIsReviewsOpen(!isReviewsOpen);
  };

  const handleToggleReview = () => {
    setToggleReview(!toggleReview);
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
          <p onClick={handleToggleReview}>
            <u>Avalie o profissional</u>
          </p>
          <ReviewCard isLeft />
          <ReviewCard />
        </ProfessionalReviewsHiddenContent>
      </Container>
      <Modal closeIconLeft id="review" handleToggle={handleToggleReview} toggle={toggleReview}>
        <BackgroundImage src={bgReview} alt="Flores Rose" />

        <h2>
          Avalie o <br />
          Profissional
        </h2>

        <div>
          <span>Fabiana Guedes</span>
          <div>
            <FaStar size={14} color={salmon} />
            <FaStar size={14} color={salmon} />
            <FaStar size={14} color={salmon} />
            <FaStar size={14} color={salmon} />
            <FaStar size={14} color={salmon} />
          </div>
        </div>

        <label htmlFor="testimonial">
          Depoimento:
          <textarea
            name="testimonial"
            id="testimonial"
            maxLength={200}
            placeholder="Máximo 200 caracteres"
          />
        </label>
        <Button
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
