import React from 'react';

import { Container, Content } from './styles';

interface IProps {
  toggle: boolean;
  handleToggle: () => void;
  id: string;
}

const Modal: React.FC<IProps> = ({ toggle, handleToggle, id, children }) => {
  return (
    <Container toggle={toggle} onClick={handleToggle}>
      <Content id={id}>{children}</Content>
    </Container>
  );
};

export default Modal;
