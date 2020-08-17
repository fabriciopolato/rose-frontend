import React from 'react';
import { Container } from './styles';

interface IProps {
  imgSource: string;
}

const ProfileCard: React.FC<IProps> = ({ imgSource, children }) => (
  <Container>
    <figure>
      <img src={imgSource} alt="professional profile pic" />
    </figure>
    {children}
  </Container>
);

export default ProfileCard;
