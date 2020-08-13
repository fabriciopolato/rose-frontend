import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  MyDoctor,
  MyDoctorContainer,
  NextSchedules,
  PastSchedules,
  Payments,
  TherapyGroups,
} from './styles';

import { Patient, fetchPatient } from '../../services/api';

import { FaHeart } from 'react-icons/fa';
import { Navbar, Footer, ProfileCardDropDown, Button } from '../../components';
import { useTheme } from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const [patient, setPatient] = useState({} as Patient);
  const [isMyDoctorsOpen, setIsMyDoctorsOpen] = useState(false);
  const [isNextSchedulesOpen, setIsNextSchedulesOpen] = useState(false);
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [isPreviousSchedulesOpen, setIsPreviousSchedulesOpen] = useState(false);
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchPatient(id);
        setPatient(response.data);
      } catch (error) {
        history.push('/');
      }
    })();
  }, [id, history]);

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
        </ProfileCardDropDown>

        <ProfileCardDropDown
          onClick={() => setIsGroupsOpen(!isGroupsOpen)}
          title="Grupos de Terapia"
          isOpen={isGroupsOpen}
        >
          <TherapyGroups>
            <p>
              Venha particiar dos nossos Grupos de Terapia, um lugar totalmente seguro e livre de
              preconceitos, compartilhe experiências, escute o próximo. Grupos são semanais e
              totalmente grátis.
            </p>
            <Button
              backgroundColor={salmon}
              backgroundColorOnHover={red}
              textColor={black}
              textColorOnHover={black}
            >
              ver grupos
            </Button>
          </TherapyGroups>
        </ProfileCardDropDown>

        <ProfileCardDropDown
          onClick={() => setIsPreviousSchedulesOpen(!isPreviousSchedulesOpen)}
          title="Histórico"
          isOpen={isPreviousSchedulesOpen}
        >
          <PastSchedules>
            <section>
              <h2>Fabiana Guedes</h2>
              <div>
                <p>29/05/2020 </p>
                <span>20:30</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>20:30</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>20:30</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>20:30</span>
              </div>
            </section>
          </PastSchedules>
        </ProfileCardDropDown>

        <ProfileCardDropDown
          onClick={() => setIsPaymentsOpen(!isPaymentsOpen)}
          title="Pagamentos"
          isOpen={isPaymentsOpen}
        >
          <Payments>
            <section>
              <h2>Fabiana Guedes</h2>
              <div>
                <p>29/05/2020 </p>
                <span>pagamento efetuado</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>pagamento efetuado</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>pagamento efetuado</span>
              </div>
              <div>
                <p>29/05/2020 </p>
                <span>pagamento efetuado</span>
              </div>
            </section>
          </Payments>
        </ProfileCardDropDown>
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
