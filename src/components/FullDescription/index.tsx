import React, { useEffect, useState, useRef } from 'react';
import { Container, Triangle, FullDescriptionHiddenContent, FullDescriptionItem } from './styles';

interface Props {
  experiences: string[];
  specialties: string[];
  education: string[];
  description: string;
}

const FullDescription: React.FC<Props> = ({ experiences, specialties, education, description }) => {
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
            {experiences.map(experience => (
              <li key={experience}>{experience}</li>
            ))}
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Especialidade</h3>
          <ul>
            {specialties.map(specialty => (
              <li key={specialty}>{specialty}</li>
            ))}
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Formação</h3>
          <ul>
            {education.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FullDescriptionItem>
        <FullDescriptionItem>
          <h3>Descrição Profissional</h3>
          <p>{description}</p>
        </FullDescriptionItem>
        <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
      </FullDescriptionHiddenContent>
    </Container>
  );
};

export default FullDescription;
