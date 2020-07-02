import React, { useState, ChangeEvent } from 'react';

import { InputContainer, InputCheckbox, InputContent } from './styles';

const SpecialtyCheckbox: React.FC = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  return (
    <InputContainer isChecked={isChecked}>
      <InputCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <InputContent>{children}</InputContent>
    </InputContainer>
  );
};

export default SpecialtyCheckbox;
