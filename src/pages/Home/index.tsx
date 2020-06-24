import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { Container, Header, ButtonSection } from './styles';
import headerImg from '../../assets/home/header_img.png';
import theme from '../../styles/theme';

const { red, white, black, orange } = theme;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header>
        <article>
          <div>
            <h1>Você não está sozinhe</h1>
            <p>
              Rose está focada em ajudar a comunidade LGBTQIA+ a achar
              profissionais de psicologia e psiquiatria. A plataforma livre de
              preconceitos. Você não está sozinhe.
            </p>
          </div>
          <figure>
            <img src={headerImg} alt="pessoas da comunidade LGBTQIA+" />
          </figure>
        </article>
      </Header>
      <h2>Comece por aqui:</h2>
      <ButtonSection>
        <Button
          backgroundColor={red}
          textColor={white}
          backgroundColorOnHover={orange}
          textColorOnHover={black}
        >
          O que está sentido?
        </Button>
        <Button
          backgroundColor={red}
          textColor={white}
          backgroundColorOnHover={orange}
          textColorOnHover={black}
        >
          Buscar profissionais
        </Button>
      </ButtonSection>
      <h2>Rose junto com você</h2>
    </Container>
  );
};

export default Home;
