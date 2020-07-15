import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '..';
import { Card } from './styles';

import polatinho from '../../assets/polato.jpeg';
import ratingStars from '../../assets/rating-stars.svg';

import { useTheme } from 'styled-components';

export interface IProps {
  isTherapyGroup?: boolean;
  name: string;
  avatar: string;
  specialties: string[];
  price: number;
  crp: string;
  _id: string;
}

const CarouselCard: React.FC<IProps> = ({
  isTherapyGroup = false,
  name,
  avatar,
  specialties,
  price,
  crp,
  _id: id,
}) => {
  const { salmon, red, white, black, lightSteelBlue } = useTheme();

  return (
    <Card isTherapyGroup={isTherapyGroup}>
      <figure>
        <img src={avatar} alt={name} />
      </figure>
      <h2>{name}</h2>
      <section>
        <ul>
          {specialties.map(elem => (
            <li key={elem}>{elem}</li>
          ))}
        </ul>
        <div>
          <strong>50 min / R${price}</strong>
          <p>CRP: {crp} </p>
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
        <Link to={`/profissional/${id}`}>
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
