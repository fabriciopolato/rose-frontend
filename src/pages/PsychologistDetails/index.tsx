import React from 'react';
import profissional from '../../assets/profissional/bob.jpg';
import { Navbar, Footer } from '../../components/index';
import { FaRegHeart, FaStar, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import theme from '../../styles/theme';
import {
  Container,
  ProfileCard,
  CredentialSection,
  ReviewSection,
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
          <div>
            <FaWhatsapp />
            <FaRegEnvelope />
            <p>50 min / R$100</p>
            <p>Planos de saúde: Amil, Bradesco</p>
          </div>
        </div>
      </ProfileCard>
      <Footer />
    </Container>
  );
};

export default PsychologistDetails;
