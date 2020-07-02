import React from 'react';

import { Container, Content } from './styles';
import close from '../../assets/close.svg';

interface IProps {
  toggle: boolean;
  handleToggle: () => void;
}

const Modal: React.FC<IProps> = ({ toggle, handleToggle }) => {
  return (
    <Container toggle={toggle} onClick={handleToggle}>
      <Content>
        <img src={close} alt="Close" onClick={handleToggle} />
        <h2>Menu</h2>
        <ul>
          <li>O que você está sentindo?</li>
          <li>Buscar profissionais</li>
          <li>Meu Perfil</li>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>
      </Content>
    </Container>
  );
};

export default Modal;
