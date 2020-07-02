import React from 'react';
import profissional from '../../assets/profissional/bob.jpg';
import { Navbar, Footer, Input } from '../../components';
import { FaRegHeart, FaStar, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import theme from '../../styles/theme';

import {
  Container,
  ProfileCard,
  CredentialSection,
  ReviewSection,
  IconsContact,
  ShortDescription,
  Schedule,
} from './styles';

const PsychologistDetails: React.FC = () => {
  const { white } = theme;
  return (
    <Container>
      <Navbar />
      <ProfileCard>
        <figure>
          <img src={profissional} alt="professional profile pic" />
        </figure>
        <div>
          <div>
            <h1>Pedro Siqueira</h1>
          </div>
          <CredentialSection>
            <p>CRP: 0254861</p>
            <FaRegHeart size={20} color={white} />
          </CredentialSection>
          <ReviewSection>
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <p>5 avaliações</p>
          </ReviewSection>
          <IconsContact>
            <FaWhatsapp color={white} size={20} />
            <FaRegEnvelope color={white} size={20} />
          </IconsContact>

          <strong>50 min / R$100</strong>
          <p>Planos de saúde: Amil, Bradesco</p>
        </div>
      </ProfileCard>
      <ShortDescription>
        <p>
          Olá! sou psicóloga há 6 anos e possuo experiência em casos de
          ansiedade, depressão, autoestima e conflitos familiares. Acredito na
          busca do autoconhecimento para melhoria na resolução de conflitos,
          trazendo o equilíbrio e a harmonia. Aguardo você para caminharmos em
          direção ao seu propósito.
        </p>
      </ShortDescription>
      <Schedule>
        <h2>Horários Disponíveis:</h2>
        <Input type="date" />
        <p>
          Remarcações podem ocorrer em até 12 horas antes sem custo adicional
        </p>
      </Schedule>
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
