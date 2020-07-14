import React, { useState } from 'react';
import profissional from '../../assets/profissional/bob.jpg';
import {
  Navbar,
  Footer,
  Input,
  Button,
  Modal,
  ProfessionalReview,
  ProfileCard,
  FullDescription,
} from '../../components';
import { FaRegHeart, FaStar, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Container,
  CredentialSection,
  ReviewSection,
  IconsContact,
  ShortDescription,
  Schedule,
  ModalContent,
} from './styles';

const PsychologistDetails: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { white, black, orange, salmon } = useTheme();

  return (
    <Container>
      <Navbar />
      <ProfileCard imgSource={profissional}>
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
          Olá! sou psicóloga há 6 anos e possuo experiência em casos de ansiedade, depressão,
          autoestima e conflitos familiares. Acredito na busca do autoconhecimento para melhoria na
          resolução de conflitos, trazendo o equilíbrio e a harmonia. Aguardo você para caminharmos
          em direção ao seu propósito.
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
        <Modal toggle={toggle} handleToggle={handleToggle} id="schedule-confirmation">
          <ModalContent>
            <h2>Confirmar sessão</h2>
            <h4>Hoje - 29/05/2020</h4>
            <p>20:30</p>
            <Link to="/perfil/1">
              <Button
                textColor={black}
                textColorOnHover={black}
                backgroundColor={salmon}
                backgroundColorOnHover={orange}
              >
                CONFIRMAR
              </Button>
            </Link>
          </ModalContent>
        </Modal>
        <Input type="date" />
        <p>Remarcações podem ocorrer em até 12 horas antes sem custo adicional</p>
      </Schedule>

      <FullDescription />

      {/* todo: funcionalidade do dropdown */}
      <ProfessionalReview />
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
