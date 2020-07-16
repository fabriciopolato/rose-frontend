import React, { useState, ChangeEvent } from 'react';

import { Navbar, Footer, FeelingCheckbox, Input, Button } from '../../components';
import { Container, Content, CardQuestions, CardCheckboxes } from './styles';
import { useTheme } from 'styled-components';

const Feeling: React.FC = () => {
  const [feelings, setFeelings] = useState({
    ansiedade: false,
    depressão: false,
    'baixa_auto-estima': false,
    relacionamentos_ruins: false,
    dúvidas_de_identidade: false,
    orientação: false,
  });

  const { orange, white, lightSteelBlue } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFeelings({ ...feelings, [name]: checked });
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <CardQuestions>
          <p>Nos conte um pouco como você está se sentindo:</p>
        </CardQuestions>
        <CardCheckboxes>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings.ansiedade}
            name="ansiedade"
            id="anxiety"
          >
            Ansiedade
          </FeelingCheckbox>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings.depressão}
            name="depressão"
            id="depression"
          >
            Depressão
          </FeelingCheckbox>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings['baixa_auto-estima']}
            name="baixa_auto-estima"
            id="low-self-esteem"
          >
            Baixa auto-estima
          </FeelingCheckbox>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings.relacionamentos_ruins}
            name="relacionamentos_ruins"
            id="toxic-relationships"
          >
            Relacionamentos ruins
          </FeelingCheckbox>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings.dúvidas_de_identidade}
            name="dúvidas_de_identidade"
            id="identity-trouble"
          >
            Dúvidas de identidade
          </FeelingCheckbox>
          <FeelingCheckbox
            onChange={handleChange}
            checked={feelings.orientação}
            name="orientação"
            id="guidance"
          >
            Orientação{' '}
          </FeelingCheckbox>
          <Input type="text" placeholder="Outro:"></Input>
          <Button
            backgroundColor={orange}
            backgroundColorOnHover={lightSteelBlue}
            textColor={white}
            textColorOnHover={white}
          >
            Buscar Profissional
          </Button>
        </CardCheckboxes>
      </Content>
      <Footer />
    </Container>
  );
};

export default Feeling;
