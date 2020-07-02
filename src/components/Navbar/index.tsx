import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.svg';
import magnifier from '../../assets/navbar/magnifier.svg';
import profile from '../../assets/navbar/profile.svg';
import menu from '../../assets/navbar/menu.svg';
import { Modal } from '../../components/';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Modal toggle={toggle} handleToggle={handleToggle} id="login" />
      <Link to="/">
        <figure>
          <img src={logo} alt="rose" />
        </figure>
      </Link>
      <Nav>
        <ul>
          <li onClick={handleToggle}>
            <img src={magnifier} alt="pesquisar" />
          </li>
          <li onClick={handleToggle}>
            <img src={profile} alt="perfil" />
          </li>
          <li onClick={handleToggle}>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Navbar;
