import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => <StyledInput {...rest} />;

export default Input;
