import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...rest
}) => {
  return <StyledInput {...rest} />;
};

export default Input;
