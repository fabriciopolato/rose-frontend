import React, { useState } from 'react';
import { Container } from './styles';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Slider: React.FC = () => {
  const [value, setValue] = useState<number | Range>(50);

  return (
    <Container>
      <InputRange
        // formatLabel={() => ''}
        onChange={value => setValue(value)}
        value={value}
        minValue={0}
        maxValue={300}
      />
    </Container>
  );
};

export default Slider;
