import React from 'react';
import close from '../../assets/close.svg';

import { Container, Content } from './styles';

interface IProps {
  toggle: boolean;
  handleToggle: () => void;
  id: string;
}

const Modal: React.FC<IProps> = ({ toggle, handleToggle, id, children }) => {
  return (
    <Container toggle={toggle}>
      <Content id={id}>
        <img src={close} alt="Fechar" onClick={handleToggle} />
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
