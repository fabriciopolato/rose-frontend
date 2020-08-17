import React from 'react';
import {
  FaLinkedinIn, FaFacebookF, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';

import { Container, PrimaryContent, SecondaryContent } from './styles';

import lightLogo from '../../assets/light-logo.svg';

const Footer: React.FC = () => (
  <Container>
    <PrimaryContent>
      <ul>
        <li>Meu Perfil</li>
        <li>O que você está sentindo</li>
        <li>Buscar Profissionais</li>
        <li>Grupos de Terapia</li>
        <li>Buscar</li>
        <li>FAQ</li>
        <li>
          <div>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </li>
      </ul>
    </PrimaryContent>
    <SecondaryContent>
      <img src={lightLogo} alt="logo footer" />
      <p>&copy; 2020, Rose LTDA</p>
    </SecondaryContent>
  </Container>
);

export default Footer;
