import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
  textColor: string;
  backgroundColorOnHover: string;
  textColorOnHover: string;
}

const Button: React.FC<IProps> = ({
  children,
  backgroundColor,
  textColor,
  backgroundColorOnHover,
  textColorOnHover,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    textColor={textColor}
    backgroundColorOnHover={backgroundColorOnHover}
    textColorOnHover={textColorOnHover}
  >
    {children}
  </StyledButton>
);

export default Button;
