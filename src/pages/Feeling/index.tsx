import React, { useState, ChangeEvent } from 'react';

import { Navbar, Footer, FeelingCheckbox, Input, Button } from '../../components';
import { Container, Content, CardQuestions, CardCheckboxes } from './styles';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Feelings {
  [key: string]: boolean;
}

const Feeling: React.FC = () => {
  const [feelings, setFeelings] = useState<Feelings>({
    ansiedade: false,
    depressão: false,
    'baixa_auto-estima': false,
    relacionamentos_ruins: false,
    dúvidas_de_identidade: false,
    orientação: false,
  });

  const { orange, white, lightSteelBlue } = useTheme();
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFeelings({ ...feelings, [name]: checked });
  };

  const handlePushQuery = () => {
    let query = '?';
    for (const feeling in feelings) {
      if (feelings[feeling]) {
        query += `${feeling}=true&`;
      }
    }

    const queryArr = query.split('');
    queryArr.pop();
    query = queryArr.join('');

    if (query === '?') {
      history.push(`busque-profissionais`);
    }

    history.push(`busque-profissionais${query}`);
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
            onClick={handlePushQuery}
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
