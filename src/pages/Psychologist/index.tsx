import React from 'react';

import { Carousel } from 'react-bootstrap';
import { Navbar, Button, CarouselCard } from '../../components';
import { Container, Content, Controls } from './styles';

import theme from '../../styles/theme';
const { white, black } = theme;

const Psychologist: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Controls>
          <h1>Indicações para você: </h1>
          <Button
            backgroundColor={white}
            backgroundColorOnHover={white}
            textColor={black}
            textColorOnHover={black}
          >
            Filtro
          </Button>
        </Controls>

        <Carousel indicators={false}>
          <Carousel.Item>
            <CarouselCard />
          </Carousel.Item>
        </Carousel>
      </Content>
    </Container>
  );
};

export default Psychologist;
