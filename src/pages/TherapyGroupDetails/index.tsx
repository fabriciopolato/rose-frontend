import React, { useState, useEffect } from 'react';
import { Navbar, Footer, ProfileCard, Button } from '../../components';
import { useTheme } from 'styled-components';
import { Container, ProfessionalInfo, Schedules } from './styles';
import { ShortDescription } from '../PsychologistDetails/styles';
import { fetchOneProfessional, Professional } from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';

const TherapyGroupDetails: React.FC = () => {
  const [professional, setProfessional] = useState({} as Professional);
  const { black, white, lightSteelBlue } = useTheme();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchOneProfessional(id);
        setProfessional(response.data);
      } catch (error) {
        history.push('grupos-terapia');
        console.error(error);
      }
    })();
  }, [history, id]);

  return (
    <Container>
      <Navbar />
      <ProfileCard imgSource={professional.avatar}>
        <div>
          <div>
            <h1>Bissexuais e Preconceitos</h1>
          </div>
          <section>
            <p>50 min/ 10 pessoas</p>
          </section>

          <ProfessionalInfo>
            <h2>{professional.name}</h2>
            <p>CRP: {professional.crp}</p>
          </ProfessionalInfo>
        </div>
      </ProfileCard>
      <ShortDescription>
        <p>{professional.shortDescription}</p>
      </ShortDescription>
      <Schedules>
        <h2>Horário: toda segunda-feira, 18h</h2>
      </Schedules>
      {/* <FullDescription>
        <h2>TESTE</h2>
      </FullDescription> */}
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
