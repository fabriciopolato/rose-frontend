import React, { useState } from 'react';
import data from '../../utils/filters.json';

import { Carousel } from 'react-bootstrap';
import { Navbar, Button, CarouselCard, Modal } from '../../components';
import { Container, Content, Controls } from './styles';

import theme from '../../styles/theme';
const { white, black, salmon, lightSteelBlue, red } = theme;

const Psychologist: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
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
        <Carousel indicators={false}>
          <Carousel.Item>
            <CarouselCard />
          </Carousel.Item>
        </Carousel>
      </Content>
      <Modal toggle={toggle} handleToggle={handleToggle} id="filters">
        {data.map(item => (
          <section key={item.title}>
            <h2>{item.title}</h2>
            {item.buttons.map((button, index) => (
              <Button
                key={index}
                backgroundColor={salmon}
                backgroundColorOnHover={lightSteelBlue}
                textColor={red}
                textColorOnHover={red}
              >
                {button}
              </Button>
            ))}
          </section>
        ))}
      </Modal>
    </Container>
  );
};

export default Psychologist;
