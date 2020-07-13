import React from 'react';
import { Navbar, Footer, ProfileCard } from '../../components';
import { Container, ProfessionalInfo } from './styles';
import profissional from '../../assets/profissional/bob.jpg';

const TherapyGroupDetails: React.FC = () => {
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
      <Footer />
    </Container>
  );
};

export default TherapyGroupDetails;
