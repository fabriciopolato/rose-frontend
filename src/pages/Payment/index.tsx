import React from 'react';
import { useTheme } from 'styled-components';
import { Container, Content } from './styles';
import { Navbar, Footer, Button, Input } from '../../components';

const Payment: React.FC = () => {
  const { red, white, orange } = useTheme();

  return (
    <Container>
      <Navbar />
      <Content>
        <h1>Pagamento</h1>
        <form>
          <label htmlFor=""></label>
          <Input />

          <label htmlFor=""></label>
          <Input />

          <label htmlFor=""></label>
          <Input />

          <label htmlFor=""></label>
          <Input />
          <div>
            <img src="" alt="" />
            <p>Seus dados estão protegidos</p>
          </div>
          <div>
            <p></p>
            <input type="radio" />
          </div>
          <Button
            backgroundColor={orange}
            backgroundColorOnHover={red}
            textColor={white}
            textColorOnHover={white}
          >
            pagar
          </Button>
        </form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Payment;
