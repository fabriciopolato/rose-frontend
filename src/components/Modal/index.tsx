import React from 'react';
import close from '../../assets/close.svg';

import { Container, Content, CloseIcon } from './styles';

interface IProps {
  toggle: boolean;
  handleToggle: () => void;
  id: string;
  closeIconLeft?: boolean;
}

const Modal: React.FC<IProps> = ({ toggle, handleToggle, id, children, closeIconLeft = false }) => {
  return (
    <Container toggle={toggle}>
      <Content id={id}>
        <CloseIcon src={close} alt="Fechar" onClick={handleToggle} isLeft={closeIconLeft} />
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
