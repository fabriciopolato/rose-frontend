import React, { InputHTMLAttributes } from 'react';

import { Label } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const FeelingCheckbox: React.FC<IProps> = ({ children, id, ...rest }) => {
  return (
    <Label htmlFor={id}>
      <input {...rest} type="checkbox" id={id} />
      {children}
    </Label>
  );
};

export default FeelingCheckbox;
