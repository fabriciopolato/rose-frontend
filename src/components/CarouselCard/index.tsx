import React from 'react';

import { Button } from '..';
import { Card } from './styles';

import polatinho from '../../assets/polato.jpeg';
import ratingStars from '../../assets/rating-stars.svg';

import theme from '../../styles/theme';

const { salmon, red, white, black } = theme;

const CarouselCard: React.FC = () => {
  return (
    <Card>
      <figure>
        <img src={polatinho} alt="Polenta" />
      </figure>
      <h2>Polenta</h2>
      <section>
        <ul>
          <li>Propósito</li>
          <li>Sem Mac</li>
          <li>Suvaco Podre</li>
          <li>Sem Justificado</li>
        </ul>
        <div>
          <strong>50 min / R$100</strong>
          <p>CRP: 0254861 </p>
          <img src={ratingStars} alt="brilha brilha estrelinha" />
        </div>
      </section>
      <Button
        backgroundColor={salmon}
        backgroundColorOnHover={red}
        textColor={black}
        textColorOnHover={white}
      >
        Estou livre. <br />
        Faça sua sessão
      </Button>
    </Card>
  );
};

export default CarouselCard;
