import React from 'react';
import { Content, Container, Star } from './styles';
import ratingStars from '../../assets/rating-stars.svg';
import { IProfesionalReview } from '../../services/api';
import Moment from 'react-moment';

import 'moment-timezone';
import { useTheme } from 'styled-components';

interface IProps {
  isLeft?: boolean;
  review: IProfesionalReview;
}

const ReviewCard: React.FC<IProps> = ({ isLeft = false, review }) => {
  const { salmon } = useTheme();

  return (
    <Container isLeft={isLeft}>
      <Content>
        <p>{review.description}</p>

        <div>
          <strong>{review.patient.name}</strong>
          <div>
            <Star fill={review.rate >= 1 ? salmon : 'none'} />
            <Star fill={review.rate >= 2 ? salmon : 'none'} />
            <Star fill={review.rate >= 3 ? salmon : 'none'} />
            <Star fill={review.rate >= 4 ? salmon : 'none'} />
            <Star fill={review.rate >= 5 ? salmon : 'none'} />
          </div>
          {/* <img src={ratingStars} alt="estrelas de avaliação" /> */}
        </div>

        <small>
          <Moment format="MMMM/YYYY">{review.createdAt}</Moment>
        </small>
      </Content>
    </Container>
  );
};

export default ReviewCard;
