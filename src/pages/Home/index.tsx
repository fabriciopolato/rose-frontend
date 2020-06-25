import React from 'react';
import { Navbar, Button, HomeCard, Footer } from '../../components/';
import { Container, Header, ButtonSection, Title } from './styles';
import headerImg from '../../assets/home/header_img.png';
import card1 from '../../assets/home/card1.png';
import card2 from '../../assets/home/card2.png';
import card3 from '../../assets/home/card3.png';
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
      <Title>Comece por aqui:</Title>
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
      <Title>Rose com você</Title>
      <HomeCard title="Grupos de terapia" image={card1}>
        Um lugar totalmente seguro e livre de preconceitos. Compartilhe
        experiências, vamos nos ajudar!
      </HomeCard>
      <HomeCard title="Sem título" image={card2} isReversed>
        Conta pra gente o que está sentindo e indicaremos uma lista de
        profissionais que possam te ajudar.
      </HomeCard>
      <HomeCard title="Buscar Profissionais" image={card3}>
        Todos passam por uma curadoria para que respeitem nossa comunidade.
      </HomeCard>
      <Footer />
    </Container>
  );
};

export default Home;
