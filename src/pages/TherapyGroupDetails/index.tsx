import React from 'react';
import { Navbar, Footer, ProfileCard, FullDescription, Button } from '../../components';
import { useTheme } from 'styled-components';
import { Container, ProfessionalInfo, Schedules } from './styles';
import { ShortDescription } from '../PsychologistDetails/styles';
import profissional from '../../assets/profissional/bob.jpg';

const TherapyGroupDetails: React.FC = () => {
  const { black, white, lightSteelBlue } = useTheme();

  return (
    <Container>
      <Navbar />
      <ProfileCard imgSource={profissional}>
        <div>
          <div>
            <h1>Bissexuais e Preconceitos</h1>
          </div>
          <section>
            <p>50 min/ 10 pessoas</p>
          </section>

          <ProfessionalInfo>
            <h2>Julio Fernandes</h2>
            <p>CRP: 0254861</p>
          </ProfessionalInfo>
        </div>
      </ProfileCard>
      <ShortDescription>
        <p>
          Olá! sou psicóloga há 6 anos e possuo experiência em casos de ansiedade, depressão,
          autoestima e conflitos familiares. Acredito na busca do autoconhecimento para melhoria na
          resolução de conflitos, trazendo o equilíbrio e a harmonia. Aguardo você para caminharmos
          em direção ao seu propósito.
        </p>
      </ShortDescription>
      <Schedules>
        <h2>Horário: toda segunda-feira, 18h</h2>
      </Schedules>
      <FullDescription>
        <h2>TESTE</h2>
      </FullDescription>
      <Footer />
      <Button
        backgroundColor={white}
        backgroundColorOnHover={lightSteelBlue}
        textColor={black}
        textColorOnHover={white}
      >
        inscreva-se
      </Button>
    </Container>
  );
};

export default TherapyGroupDetails;
