import React, { useState } from 'react';
import {
  Container,
  Content,
  MyDoctor,
  MyDoctorContainer,
  NextSchedules,
  NextSchedulesContainer,
} from './styles';
import { FaHeart } from 'react-icons/fa';
import { Navbar, Footer, ProfileCardDropDown, Button } from '../../components';
import { useTheme } from 'styled-components';

const Profile: React.FC = () => {
  const [isMyDoctorsOpen, setIsMyDoctorsOpen] = useState(false);
  const [isNextSchedulesOpen, setIsNextSchedulesOpen] = useState(false);
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [isPreviousSchedulesOpen, setIsPreviousSchedulesOpen] = useState(false);
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);

  const { red, white, black, salmon, lightSteelBlue } = useTheme();

  return (
    <Container>
      <Navbar />
      <Content>
        <h1>Meu Perfil</h1>
        <ProfileCardDropDown
          onClick={() => setIsMyDoctorsOpen(!isMyDoctorsOpen)}
          title="Meus Médicos"
          isOpen={isMyDoctorsOpen}
        >
          <MyDoctorContainer>
            <MyDoctor>
              <div>
                <h2>Fabiana Guedes</h2>
                <p>
                  <u>ver perfil</u>
                </p>
              </div>
              <FaHeart size={20} />
            </MyDoctor>
            <MyDoctor>
              <div>
                <h2>Fabiana Guedes</h2>
                <p>
                  <u>ver perfil</u>
                </p>
              </div>
              <FaHeart size={20} />
            </MyDoctor>
          </MyDoctorContainer>
        </ProfileCardDropDown>

        <ProfileCardDropDown
          onClick={() => setIsNextSchedulesOpen(!isNextSchedulesOpen)}
          title="Próximas Consultas"
          isOpen={isNextSchedulesOpen}
        >
          <NextSchedulesContainer>
            <NextSchedules>
              <section>
                <h2>Fabiana Guedes</h2>
                <p>
                  Hoje - 29/05/2020 <br />
                  20:30
                </p>
              </section>
              <div>
                <Button
                  textColor={black}
                  textColorOnHover={white}
                  backgroundColor={salmon}
                  backgroundColorOnHover={red}
                >
                  Cancelamento
                </Button>
                <Button
                  textColor={black}
                  textColorOnHover={black}
                  backgroundColor={lightSteelBlue}
                  backgroundColorOnHover={red}
                >
                  ACESSAR SALA
                </Button>
              </div>
            </NextSchedules>
          </NextSchedulesContainer>
        </ProfileCardDropDown>

        <ProfileCardDropDown
          onClick={() => setIsGroupsOpen(!isGroupsOpen)}
          title="Grupos de Terapia"
          isOpen={isGroupsOpen}
        ></ProfileCardDropDown>
        <ProfileCardDropDown
          onClick={() => setIsPreviousSchedulesOpen(!isPreviousSchedulesOpen)}
          title="Histórico"
          isOpen={isPreviousSchedulesOpen}
        ></ProfileCardDropDown>
        <ProfileCardDropDown
          onClick={() => setIsPaymentsOpen(!isPaymentsOpen)}
          title="Pagamentos"
          isOpen={isPaymentsOpen}
        ></ProfileCardDropDown>
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
