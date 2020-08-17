import React from 'react';

import { Container } from './styles';

interface IProps {
  isReversed?: boolean;
  image: string;
  title: string;
}

const HomeCard: React.FC<IProps> = ({
  isReversed = false, image, title, children,
}) => (
  <Container isReversed={isReversed}>
    <article data-testid="row">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <aside>
        <h3>{title}</h3>
        <p>{children}</p>
      </aside>
    </article>
  </Container>
);

export default HomeCard;
