import React from 'react';

import { Label } from './styles';

interface IProps {
  id: string;
}

const FeelingCheckbox: React.FC<IProps> = ({ children, id }) => {
  return (
    <Label htmlFor={id}>
      <input type="checkbox" id={id} />
      {children}
    </Label>
  );
};

export default FeelingCheckbox;
