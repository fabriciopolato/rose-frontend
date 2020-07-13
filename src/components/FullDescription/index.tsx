import React, { useState } from 'react';
import { Container, Triangle } from './styles';

const FullDescription: React.FC = ({ children }) => {
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] = useState(false);

  const handleFullDescriptionDropdown = () => {
    setIsFullDescriptionOpen(!isFullDescriptionOpen);
  };

  return (
    <Container>
      <div>
        <Triangle onClick={handleFullDescriptionDropdown} isReversed={isFullDescriptionOpen} />
        <h2>Perfil Profissional</h2>
      </div>
      {children}
    </Container>
  );
};

export default FullDescription;
