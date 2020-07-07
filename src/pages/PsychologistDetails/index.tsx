import React, { useState } from 'react';
import profissional from '../../assets/profissional/bob.jpg';
import { Navbar, Footer, Input, Button, Modal, ReviewCard } from '../../components';
import { FaRegHeart, FaStar, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { useTheme } from 'styled-components'

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
  ProfessionalReviewsHiddenContent,
} from './styles';

const PsychologistDetails: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleFullDescriptionDropdown = () => {
    setIsFullDescriptionOpen(!isFullDescriptionOpen);
  };

  const handleReviewsDropdown = () => {
    setIsReviewsOpen(!isReviewsOpen);
  };

  const { white, black, orange, salmon } = useTheme();

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
        <p>Remarcações podem ocorrer em até 12 horas antes sem custo adicional</p>
      </Schedule>

      {/* todo: funcionalidade do dropdown */}
      <FullDescription>
        <div>
          <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
          <h2>Perfil Profissional</h2>
        </div>
        <FullDescriptionHiddenContent isOpen={isFullDescriptionOpen}>
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
          <FullDescriptionItem>
            <h3>Especialidade</h3>
            <ul>
              <li>Mindfulness</li>
              <li>Evolução emocional</li>
              <li>Saúde mental</li>
            </ul>
          </FullDescriptionItem>
          <FullDescriptionItem>
            <h3>Formação</h3>
            <ul>
              <li>
                - Graduação em Naturologia Aplicada - Universidade do Sul de Santa Catarina (UNISUL)
                - 2005
              </li>
              <li>
                - Pós-graduada em Neurociência e Futuro Sustentado de Pessoas e Organizações -
                Faculdade de Ciências Médicas da Santa Casa de São Paulo - 2018
              </li>
              <li>
                - Curso de Atualização em Transtorno Ansioso e Depressivo - Hospital Israelita
                Albert Einstein - 2019
              </li>
              <li>- Formação em Inteligência Emocional - Florida Christian University - 2016</li>
            </ul>
          </FullDescriptionItem>
          <FullDescriptionItem>
            <h3>Descrição Profissional</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque quibusdam dolor
              rerum modi iure ad odio distinctio accusantium? Reiciendis!
            </p>
          </FullDescriptionItem>
          <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
        </FullDescriptionHiddenContent>
      </FullDescription>

      {/* todo: funcionalidade do dropdown */}
      <ProfessionalReviews>
        <div>
          <h2>Avaliações</h2>
          <Triangle onClick={handleReviewsDropdown} isReversed={isReviewsOpen} />
        </div>
        <ProfessionalReviewsHiddenContent isOpen={isReviewsOpen}>
          <ReviewCard isLeft />
          <ReviewCard />
        </ProfessionalReviewsHiddenContent>
      </ProfessionalReviews>
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
