import React from 'react';
import { Content, Container } from './styles';
import ratingStars from '../../assets/rating-stars.svg';
import { IProfesionalReview } from '../../services/api';
import Moment from 'react-moment';
import 'moment-timezone';

interface IProps {
  isLeft?: boolean;
  review: IProfesionalReview;
}

const ReviewCard: React.FC<IProps> = ({ isLeft = false, review }) => {
  return (
    <Container isLeft={isLeft}>
      <Content>
        <p>{review.description}</p>

        <div>
          <strong>{review.patient.name}</strong>
          <img src={ratingStars} alt="estrelas de avaliação" />
        </div>

        <small>
          <Moment format="MMMM/YYYY">{review.createdAt}</Moment>
        </small>
      </Content>
    </Container>
  );
};

export default ReviewCard;
