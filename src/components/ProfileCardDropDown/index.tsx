import React, { HTMLAttributes } from 'react';
import closeIcon from '../../assets/close.svg';

import { Container, Content, CardTitle } from './styles';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  isOpen: boolean;
}

const ProfileCardDropDown: React.FC<IProps> = ({ title, isOpen, children, ...rest }) => {
  return (
    <Container isOpen={isOpen} {...rest}>
      <CardTitle>
        <h2>{title}</h2>
        {isOpen && <img src={closeIcon} alt="Fechar" />}
      </CardTitle>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
};

export default ProfileCardDropDown;
