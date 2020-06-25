import React from 'react';
import { Content, Container } from './styles';
import ratingStars from '../../assets/rating-stars.svg';

interface IProps {
  isLeft?: boolean;
}

const ReviewCard: React.FC<IProps> = ({ isLeft = false }) => {
  return (
    <Container isLeft={isLeft}>
      <Content>
        <p>
          Eu costumo dizer que a Joana fez doutorado em Anjologia porque ela não
          é daqui não... Profissional espetacular: conhecedora, competente,
          disponível, amável; tudo que eu precisava no momento
        </p>

        <div>
          <strong>Ricky Almeida</strong>
          <img src={ratingStars} alt="estrelas de avaliação" />
        </div>

        <p>Dezembro/2019</p>
      </Content>
    </Container>
  );
};

export default ReviewCard;
