import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '..';
import { Card } from './styles';

import polatinho from '../../assets/polato.jpeg';
import ratingStars from '../../assets/rating-stars.svg';

import { useTheme } from 'styled-components';

export interface IProps {
  isTherapyGroup?: boolean;
}

const CarouselCard: React.FC<IProps> = ({ isTherapyGroup = false }) => {
  const { salmon, red, white, black, lightSteelBlue } = useTheme();

  return (
    <Card isTherapyGroup={isTherapyGroup}>
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
          <img src={ratingStars} alt="estrelas de avaliação" />
        </div>
      </section>
      {isTherapyGroup ? (
        <Link to="/grupos-terapia/bissexuais">
          <Button
            backgroundColor={white}
            backgroundColorOnHover={lightSteelBlue}
            textColor={black}
            textColorOnHover={white}
          >
            INSCREVA-SE
          </Button>
        </Link>
      ) : (
        <Link to="/profissional/1">
          <Button
            backgroundColor={salmon}
            backgroundColorOnHover={red}
            textColor={black}
            textColorOnHover={white}
          >
            Estou livre. <br />
            Faça sua sessão
          </Button>
        </Link>
      )}
    </Card>
  );
};

export default CarouselCard;
