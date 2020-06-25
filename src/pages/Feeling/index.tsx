import React from 'react';

import { Navbar, Footer, FeelingCheckbox } from '../../components';
import { Container, Content, CardQuestions, CardCheckboxes } from './styles';

const Feeling: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <CardQuestions>
          <p>Nos conte um pouco como você está se sentindo:</p>
        </CardQuestions>
        <CardCheckboxes>
          <FeelingCheckbox id="anxiety">Ansiedade</FeelingCheckbox>
          <FeelingCheckbox id="depression">Depressão</FeelingCheckbox>
          <FeelingCheckbox id="low-self-esteem">
            Baixa auto-estima
          </FeelingCheckbox>
          <FeelingCheckbox id="toxic-relationships">
            Relacionamentos ruins
          </FeelingCheckbox>
          <FeelingCheckbox id="identity-trouble">
            Dúvidas de identidade
          </FeelingCheckbox>
          <FeelingCheckbox id="guidance">Orientação </FeelingCheckbox>
        </CardCheckboxes>
      </Content>
      <Footer />
    </Container>
  );
};

export default Feeling;
