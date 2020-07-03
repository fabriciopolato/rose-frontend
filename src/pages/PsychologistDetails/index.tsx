import React, { useState } from 'react';
import profissional from '../../assets/profissional/bob.jpg';
import { Navbar, Footer, Input, Button, Modal } from '../../components';
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
  FullDescription,
  Triangle,
  ProfessionalReviews,
  ModalContent,
  FullDescriptionHiddenContent,
  FullDescriptionItem,
} from './styles';

const PsychologistDetails: React.FC = () => {
  const { white, black, orange, salmon } = theme;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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

      {/* todo: funcionalidade do calendário */}
      <Schedule>
        <h2>Horários Disponíveis:</h2>
        <Button
          textColor={black}
          textColorOnHover={white}
          backgroundColorOnHover={orange}
          backgroundColor={orange}
          onClick={handleToggle}
        >
          20:30h
        </Button>
        <Modal
          toggle={toggle}
          handleToggle={handleToggle}
          id="schedule-confirmation"
        >
          <ModalContent>
            <h2>Confirmar sessão</h2>
            <h4>Hoje - 29/05/2020</h4>
            <p>20:30</p>
            <Button
              textColor={black}
              textColorOnHover={black}
              backgroundColor={salmon}
              backgroundColorOnHover={orange}
            >
              CONFIRMAR
            </Button>
          </ModalContent>
        </Modal>
        <Input type="date" />
        <p>
          Remarcações podem ocorrer em até 12 horas antes sem custo adicional
        </p>
      </Schedule>

      {/* todo: funcionalidade do dropdown */}
      <FullDescription>
        <div>
          <Triangle />
          <h2>Perfil Profissional</h2>
        </div>
        <FullDescriptionHiddenContent>
          <FullDescriptionItem>
            <h3>Experiência</h3>
            <ul>
              <li>Ansiedade</li>
              <li>Autoconhecimento</li>
              <li>Doenças</li>
              <li>Psicossomáticas</li>
              <li>Equilibrio</li>
              <li>Emocional</li>
              <li>Estresse</li>
              <li>Meditação</li>
              <li>Mindfulness</li>
              <li>Sono</li>
            </ul>
          </FullDescriptionItem>
        </FullDescriptionHiddenContent>
      </FullDescription>

      {/* todo: funcionalidade do dropdown */}
      <ProfessionalReviews>
        <div>
          <h2>Avaliações</h2>
          <Triangle />
        </div>
      </ProfessionalReviews>
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
