import React, { useState } from 'react';

import 'react-input-range/lib/css/index.css';
import InputRange, { Range } from 'react-input-range';

import { Container } from './styles';

const Slider: React.FC = () => {
  const [value, setValue] = useState<number | Range>(50);

  return (
    <Container>
      <InputRange
        // formatLabel={() => ''}
        onChange={inputValue => setValue(inputValue)}
        value={value}
        minValue={0}
        maxValue={300}
      />
    </Container>
  );
};

export default Slider;
