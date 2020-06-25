import React from 'react';

import { Container } from './styles';

interface IProps {
  isReversed?: boolean;
  image: string;
  title: string;
}

const HomeCard: React.FC<IProps> = ({
  isReversed = false,
  image,
  title,
  children,
}) => {
  return (
    <Container isReversed={isReversed}>
      <article>
        <figure>
          <img src={image} alt="Pessoas da comunidade LGBTQIA+" />
        </figure>
        <aside>
          <h3>{title}</h3>
          <p>{children}</p>
        </aside>
      </article>
    </Container>
  );
};

export default HomeCard;
