import React, { useEffect, useState, useRef } from 'react';
import { Container, Triangle, FullDescriptionHiddenContent, FullDescriptionItem } from './styles';

const FullDescription: React.FC = () => {
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  const descriptionElement = useRef({} as HTMLDivElement);

  useEffect(() => {
    const element = descriptionElement.current;
    const parentStyles = getComputedStyle(element);

    let totalHeight = parseInt(parentStyles.paddingBottom);

    element.childNodes.forEach(child => {
      const childStyles = getComputedStyle(child as HTMLElement);
      totalHeight += parseInt(childStyles.height) + parseInt(childStyles.marginBottom);
    });

    setDescriptionHeight(totalHeight);
  }, [isFullDescriptionOpen]);

  const handleFullDescriptionDropdown = () => {
    setIsFullDescriptionOpen(!isFullDescriptionOpen);
  };

  return (
    <Container>
      <div>
        <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
        <h2>Perfil Profissional</h2>
      </div>
      <FullDescriptionHiddenContent
        ref={descriptionElement}
        height={descriptionHeight}
        isOpen={isFullDescriptionOpen}
      >
        <FullDescriptionItem>
          <h3>Experiência</h3>
          <ul>
            <li>Ansiedade</li>
            <li>Autoconhecimento</li>
            <li>Doenças</li>
            <li>Psicossomáticas</li>
            <li>Equilibrio</li>
            <li>Emocional</li>
            <li>Estresse</li>
            <li>Meditação</li>
            <li>Mindfulness</li>
            <li>Sono</li>
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Especialidade</h3>
          <ul>
            <li>Mindfulness</li>
            <li>Evolução emocional</li>
            <li>Saúde mental</li>
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Formação</h3>
          <ul>
            <li>
              - Graduação em Naturologia Aplicada - Universidade do Sul de Santa Catarina (UNISUL) -
              2005
            </li>
            <li>
              - Pós-graduada em Neurociência e Futuro Sustentado de Pessoas e Organizações -
              Faculdade de Ciências Médicas da Santa Casa de São Paulo - 2018
            </li>
            <li>
              - Curso de Atualização em Transtorno Ansioso e Depressivo - Hospital Israelita Albert
              Einstein - 2019
            </li>
            <li>- Formação em Inteligência Emocional - Florida Christian University - 2016</li>
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Descrição Profissional</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque quibusdam dolor
            rerum modi iure ad odio distinctio accusantium? Reiciendis!
          </p>
        </FullDescriptionItem>
        <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
      </FullDescriptionHiddenContent>
    </Container>
  );
};

export default FullDescription;
