import React, { useState } from 'react';
import data from '../../utils/filters.json';
import Carousel from 'react-slick';

import {
  Navbar,
  Button,
  CarouselCard,
  Modal,
  SpecialtyCheckbox,
  Slider,
  Input,
} from '../../components';

import { Container, Content, Controls, FiltersSection } from './styles';

import { useTheme } from 'styled-components';

const Psychologist: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { white, black, orange, lightSteelBlue } = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            onClick={handleToggle}
          >
            Filtro
          </Button>
        </Controls>

        <Carousel {...settings}>
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </Carousel>
      </Content>
      <Modal toggle={toggle} handleToggle={handleToggle} id="filters">
        {data.map(item => (
          <section key={item.title}>
            <h2>{item.title}</h2>
            <FiltersSection>
              {item.buttons.map((button, index) => (
                <SpecialtyCheckbox key={index}>{button}</SpecialtyCheckbox>
              ))}
            </FiltersSection>
          </section>
        ))}
        <section>
          <h2>Valor:</h2>
          <Slider />
        </section>
        <section>
          <h2>Plano de Saúde:</h2>
          <Input type="text" placeholder="Nome do seu plano de saúde" />
        </section>
        <Button
          backgroundColor={orange}
          backgroundColorOnHover={lightSteelBlue}
          textColor={white}
          textColorOnHover={white}
        >
          BUSCAR PROFISSIONAIS
        </Button>
      </Modal>
    </Container>
  );
};

export default Psychologist;
