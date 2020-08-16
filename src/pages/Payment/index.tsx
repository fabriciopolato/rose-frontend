import React from 'react';
import { useTheme } from 'styled-components';
import { FiCreditCard } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';

import { Navbar, Footer, Button } from '../../components';
import {
  Container,
  Content,
  FormContainer,
  InputPayment,
  InputContainer,
  InputExpirationCVV,
  ProtectedInfo,
  SaveInfoToggle,
} from './styles';

const Payment: React.FC = () => {
  const { red, white, orange } = useTheme();

  return (
    <Container>
      <Navbar />
      <Content>
        <h1>Pagamento</h1>
        <FormContainer>
          <form>
            <label htmlFor="">Número do cartão</label>
            <InputContainer>
              <FiCreditCard />
              <InputPayment placeholder="**** **** **** 1234" />
              <FiCreditCard />
            </InputContainer>

            <section>
              <div>
                <label htmlFor="">Data de expiração</label>
                <InputExpirationCVV>
                  <InputPayment placeholder="08/24" />
                </InputExpirationCVV>
              </div>
              <div>
                <label htmlFor="">CVV</label>
                <InputExpirationCVV>
                  <InputPayment placeholder="999" />
                </InputExpirationCVV>
              </div>
            </section>

            <label htmlFor="">Nome escrito no cartão</label>
            <InputContainer>
              <InputPayment placeholder="eliana leite silva" />
            </InputContainer>
            <ProtectedInfo>
              <FaLock size={13} />
              <p>Seus dados estão protegidos</p>
            </ProtectedInfo>
            <SaveInfoToggle>
              <p>Salvar informações do cartão</p>
              <input type="radio" />
            </SaveInfoToggle>
            <Button
              backgroundColor={orange}
              backgroundColorOnHover={red}
              textColor={white}
              textColorOnHover={white}
            >
              pagar
            </Button>
          </form>
        </FormContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Payment;
