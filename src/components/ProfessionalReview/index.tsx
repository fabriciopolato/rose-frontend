import React, { useState, useRef, useEffect, ChangeEvent, useContext } from 'react';
import { useTheme } from 'styled-components';
import { Container, Triangle, ProfessionalReviewsHiddenContent, BackgroundImage } from './styles';
import { ReviewCard, Modal, Button } from '../../components';
import bgReview from '../../assets/bg-login.svg';
import { ReactComponent as Star } from '../../assets/review-star.svg';
import { ModalContext } from '../../contexts/ModalContext';
import { fetchProfessionalReviews, IProfesionalReview } from '../../services/api';
import { useParams } from 'react-router-dom';

interface Props {
  handleSubmit(starReview: number, reviewTextArea: string): void;
}

interface IParams {
  id: string;
}

const ProfessionalReview: React.FC<Props> = ({ handleSubmit }) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [reviewHeight, setReviewHeight] = useState(0);
  const [reviewTextArea, setReviewTextArea] = useState('');
  const [starReview, setStarReview] = useState(0);

  const [professionalReviews, setProfessionalReviews] = useState<IProfesionalReview[]>([])

  const { id } = useParams() as IParams;

  const { professionalReviewToggle, handleProfessionalReviewToggle } = useContext(ModalContext)

  const { black, salmon, orange } = useTheme();

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
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchProfessionalReviews(id);

        setProfessionalReviews(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, []);

  const handleReviewsDropdown = () => {
    setIsReviewsOpen(!isReviewsOpen);
  };

  // TODO: refactor context to handle form
  // const handleToggleReview = () => {
  //   setToggleReview(!toggleReview);
  //   setStarReview(0);
  //   setReviewTextArea('');
  // };

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
          <p onClick={handleProfessionalReviewToggle}>
            <u>Avalie o profissional</u>
          </p>

          {professionalReviews.map((review, index) => (
           index % 2 === 0 
            ? <ReviewCard isLeft key={review._id} review={review} />
            : <ReviewCard key={review._id} review={review} />
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
          Avalie o <br />
          Profissional
        </h2>

        <div>
          <span>Fabiana Guedes</span>
          <div>
            <Star
              onClick={() => setStarReview(1)}
              color={orange}
              fill={starReview >= 1 ? orange : 'none'}
            />
            <Star
              onClick={() => setStarReview(2)}
              color={orange}
              fill={starReview >= 2 ? orange : 'none'}
            />
            <Star
              onClick={() => setStarReview(3)}
              color={orange}
              fill={starReview >= 3 ? orange : 'none'}
            />
            <Star
              onClick={() => setStarReview(4)}
              color={orange}
              fill={starReview >= 4 ? orange : 'none'}
            />
            <Star
              onClick={() => setStarReview(5)}
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
