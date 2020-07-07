import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.svg';
import magnifier from '../../assets/navbar/magnifier.svg';
import profile from '../../assets/navbar/profile.svg';
import menu from '../../assets/navbar/menu.svg';
import { Modal } from '../../components/';
import { Link } from 'react-router-dom';
import bgMenu from '../../assets/bg-menu.svg';

import { Container, Nav, ModalMenu } from './styles';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Container>
      <ModalMenu>
        <Modal toggle={toggleMenu} handleToggle={handleToggleMenu} id="menu">
          <h2>Menu</h2>
          <ul>
            <li>O que você está sentindo?</li>
            <li>Buscar profissionais</li>
            <li>Meu Perfil</li>
            <li>FAQ</li>
            <li>Contato</li>
          </ul>
          <figure>
            <img src={bgMenu} alt="rose flower" />
          </figure>
        </Modal>
      </ModalMenu>
      <Link to="/">
        <figure>
          <img src={logo} alt="rose" />
        </figure>
      </Link>
      <Nav>
        <ul>
          <li onClick={handleToggleMenu}>
            <img src={magnifier} alt="pesquisar" />
          </li>
          <li onClick={handleToggleMenu}>
            <img src={profile} alt="perfil" />
          </li>
          <li onClick={handleToggleMenu}>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Navbar;
