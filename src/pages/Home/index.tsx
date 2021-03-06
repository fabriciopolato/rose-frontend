import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import {
  Navbar, Button, HomeCard, Testimonials, Footer,
} from '../../components';

import {
  Container, Header, ButtonSection, Title,
} from './styles';

import headerImg from '../../assets/home/header_img.png';
import card1 from '../../assets/home/card1.png';
import card2 from '../../assets/home/card2.png';
import card3 from '../../assets/home/card3.png';

const Home: React.FC = () => {
  const {
    red, white, black, orange,
  } = useTheme();

  return (
    <Container>
      <Navbar />
      <Header>
        <article>
          <div>
            <h1>Você não está sozinhe</h1>
            <p>
              Rose está focada em ajudar a comunidade LGBTQIA+ a achar profissionais de psicologia e
              psiquiatria. A plataforma livre de preconceitos.
            </p>
          </div>
          <figure>
            <img src={headerImg} alt="pessoas da comunidade LGBTQIA+" />
          </figure>
        </article>
      </Header>
      <Title>Comece por aqui:</Title>
      <ButtonSection>
        <Link to="/o-que-esta-sentindo">
          <Button
            backgroundColor={red}
            textColor={white}
            backgroundColorOnHover={orange}
            textColorOnHover={black}
          >
            O que está sentido?
          </Button>
        </Link>
        <Link to="/busque-profissionais">
          <Button
            backgroundColor={red}
            textColor={white}
            backgroundColorOnHover={orange}
            textColorOnHover={black}
          >
            Buscar profissionais
          </Button>
        </Link>
      </ButtonSection>
      <Title>Rose com você</Title>
      <HomeCard title="Grupos de terapia" image={card1}>
        Um lugar totalmente seguro e livre de preconceitos. Compartilhe experiências, vamos nos
        ajudar!
      </HomeCard>
      <HomeCard title="O que está sentindo?" image={card2} isReversed>
        Conta pra gente o que está sentindo e indicaremos uma lista de profissionais que possam te
        ajudar.
      </HomeCard>
      <HomeCard title="Buscar Profissionais" image={card3}>
        Todos passam por uma curadoria para que respeitem nossa comunidade.
      </HomeCard>
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
