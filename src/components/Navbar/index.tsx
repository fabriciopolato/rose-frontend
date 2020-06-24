import React from 'react';
import logo from '../../assets/navbar/logo.svg';
import magnifier from '../../assets/navbar/magnifier.svg';
import profile from '../../assets/navbar/profile.svg';
import menu from '../../assets/navbar/menu.svg';

import { Container, Nav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <figure>
        <img src={logo} alt="rose" />
      </figure>
      <Nav>
        <ul>
          <li>
            <img src={magnifier} alt="pesquisar" />
          </li>
          <li>
            <img src={profile} alt="perfil" />
          </li>
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Navbar;
