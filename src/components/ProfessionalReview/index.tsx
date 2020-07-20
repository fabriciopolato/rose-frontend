import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { useTheme } from 'styled-components';
import { Container, Triangle, ProfessionalReviewsHiddenContent, BackgroundImage } from './styles';
import { ReviewCard, Modal, Button } from '../../components';
import bgReview from '../../assets/bg-login.svg';
import { FaStar } from 'react-icons/fa';

interface Props {
  handleSubmit(starReview: number, reviewTextArea: string): void;
}

const ProfessionalReview: React.FC<Props> = ({ handleSubmit }) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [reviewHeight, setReviewHeight] = useState(0);
  const [toggleReview, setToggleReview] = useState(false);
  const [reviewTextArea, setReviewTextArea] = useState('');
  const [starReview, setStarReview] = useState(0);

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

  const handleReviewTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewTextArea(e.target.value);
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
            <FaStar onClick={() => setStarReview(1)} size={14} color={salmon} />
            <FaStar onClick={() => setStarReview(2)} size={14} color={salmon} />
            <FaStar onClick={() => setStarReview(3)} size={14} color={salmon} />
            <FaStar onClick={() => setStarReview(4)} size={14} color={salmon} />
            <FaStar onClick={() => setStarReview(5)} size={14} color={salmon} />
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
          onClick={() => handleSubmit(starReview, reviewTextArea)}
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
