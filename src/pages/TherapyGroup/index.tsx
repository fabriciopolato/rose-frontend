import React from 'react';
// import Carousel from 'react-slick';
import { Navbar /* , CarouselCard */ } from '../../components';

import { Container, Content } from './styles';

const TherapyGroup: React.FC = () => (
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

  <Container>
    <Navbar />
    <h1>Grupos de Terapia</h1>
    <Content>
      {/* <Carousel {...settings}>
          <CarouselCard isTherapyGroup />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </Carousel> */}
    </Content>
  </Container>
);

export default TherapyGroup;
