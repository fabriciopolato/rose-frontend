import React, { useState, ChangeEvent, FormEvent } from 'react';
import logo from '../../assets/navbar/logo.svg';
import magnifier from '../../assets/navbar/magnifier.svg';
import profile from '../../assets/navbar/profile.svg';
import menu from '../../assets/navbar/menu.svg';
import { Modal, Button, Input } from '../../components/';
import { Link } from 'react-router-dom';
import bgMenu from '../../assets/bg-menu.svg';
import { useTheme } from 'styled-components';
import facebook from '../../assets/navbar/facebook.svg';
import gmail from '../../assets/navbar/gmail.svg';
import {
  Container,
  Nav,
  SocialMediaIcons,
  PrivacyTerms,
  DivisionLine,
  BackgroundImage,
} from './styles';
import bgLogin from '../../assets/bg-login.svg';
import { fetchPatientLogin } from '../../services/api';

const initialValues = {
  email: '',
  password: '',
};

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetchPatientLogin(formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleLogin = () => {
    setToggleLogin(!toggleLogin);
  };

  const { salmon, black, white, lightSteelBlue } = useTheme();

  return (
    <Container>
      {/* Modal Menu */}
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

      {/* Modal Login */}
      <Modal closeIconLeft toggle={toggleLogin} handleToggle={handleToggleLogin} id="login">
        <BackgroundImage src={bgLogin} alt="rose flower" />
        <h2>Login</h2>
        <SocialMediaIcons>
          <img src={gmail} alt="gmail login" />
          <img src={facebook} alt="facebook login" />
        </SocialMediaIcons>
        <DivisionLine>
          <hr />
          <span>ou</span>
          <hr />
        </DivisionLine>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="joãosnow@winterfell.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Senha:</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            backgroundColor={salmon}
            backgroundColorOnHover={lightSteelBlue}
            textColor={black}
            textColorOnHover={white}
          >
            login
          </Button>
        </form>
        <PrivacyTerms>
          Ao criar uma conta você concorda com nossos <u>Termos de Uso</u> e nossa{' '}
          <u>Política de Privacidade</u>
        </PrivacyTerms>
      </Modal>
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
          <li onClick={handleToggleLogin}>
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
