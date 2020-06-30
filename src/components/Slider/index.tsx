import React from 'react';
import { Container } from './styles';

interface IProps {
  min: number;
  max: number;
}

const Slider: React.FC<IProps> = ({ min, max }) => {
  return (
    <Container>
      <input type="range" min={min} max={max} />
    </Container>
  );
};

export default Slider;
