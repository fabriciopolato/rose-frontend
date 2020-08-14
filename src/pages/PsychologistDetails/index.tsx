import React, { useEffect, useContext } from 'react';
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
import { Link, useParams, useHistory } from 'react-router-dom';

import {
  Container,
  CredentialSection,
  ReviewSection,
  IconsContact,
  ShortDescription,
  Schedule,
  ModalContent,
} from './styles';

import { fetchOneProfessional, Professional } from '../../services/api';

import { ModalContext } from '../../contexts/ModalContext';
import { ProfessionalContext } from '../../contexts/ProfessionalContext';

const PsychologistDetails: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const {professional, handleProfessional} = useContext(ProfessionalContext)
  const { scheduleToggle, handleScheduleToggle } = useContext(
    ModalContext
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchOneProfessional(id);

        handleProfessional(response.data);
      } catch (error) {
        history.push('busque-profissionais');
        console.error(error);
      }
    })();
  }, [id, history]);

  const { white, black, orange, salmon } = useTheme();

  if (!professional.name) {
    return <span>loading...</span>;
  }



  return (
    <Container>
      <Navbar />
      <ProfileCard imgSource={professional.avatar}>
        <div>
          <div>
            <h1>{professional.name}</h1>
          </div>
          <CredentialSection>
            <p>CRP: {professional.crp}</p>
            <FaRegHeart size={20} color={white} />
          </CredentialSection>
          <ReviewSection>
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <FaStar size={9} color={white} />
            <p>{professional.reviews.length} avaliações</p>
          </ReviewSection>
          <IconsContact>
            <FaWhatsapp color={white} size={20} />
            <FaRegEnvelope color={white} size={20} />
          </IconsContact>

          <strong>
            50 min /{' '}
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              professional.price
            )}
          </strong>
          <p>
            Planos de saúde:{' '}
            {professional.healthInsurance.map((insurance, index, arr) => {
              if (index === arr.length - 1) {
                return insurance;
              }
              return `${insurance}, `;
            })}
          </p>
        </div>
      </ProfileCard>
      <ShortDescription>
        <p>{professional.shortDescription}</p>
      </ShortDescription>

      {/* todo: funcionalidade do calendário */}
      <Schedule>
        <h2>Horários Disponíveis:</h2>
        <Button
          textColor={black}
          textColorOnHover={white}
          backgroundColorOnHover={orange}
          backgroundColor={orange}
          onClick={handleScheduleToggle}
        >
          20:30h
        </Button>
        <Modal
          toggle={scheduleToggle}
          handleToggle={handleScheduleToggle}
          id="schedule-confirmation"
        >
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

      <FullDescription
        experiences={professional.experience}
        specialties={professional.specialties}
        education={professional.education}
        description={professional.longDescription}
      />

      <ProfessionalReview  />
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
