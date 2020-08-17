import React from 'react';

import 'moment-timezone';
import Moment from 'react-moment';
import { useTheme } from 'styled-components';

import { Content, Container, Star } from './styles';

import { IProfesionalReview } from '../../services/api';

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
            {new Array(5).fill(null).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Star key={index} fill={review.rate >= index + 1 ? salmon : 'none'} />
            ))}
          </div>
        </div>

        <small>
          <Moment format="MMMM/YYYY">{review.createdAt}</Moment>
        </small>
      </Content>
    </Container>
  );
};

export default ReviewCard;
