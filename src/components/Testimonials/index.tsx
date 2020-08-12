import React from 'react';
import { Container, Content } from './styles';
import { ReviewCard } from '../index';

const Testimonials: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Depoimentos</h2>
        {/* <ReviewCard isLeft />
        <ReviewCard />
        <ReviewCard isLeft />
        <ReviewCard />
        <ReviewCard isLeft /> */}
      </Content>
    </Container>
  );
};

export default Testimonials;
