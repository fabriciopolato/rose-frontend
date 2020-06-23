import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColorx: string;
  textColor: string;
  backgroundColorOnHover: string;
  textColorOnHover: string;
}

const Button: React.FC<IProps> = ({
  backgroundColorx,
  textColor,
  backgroundColorOnHover,
  textColorOnHover,
}) => (
  <StyledButton
    backgroundColorx={backgroundColorx}
    textColor={textColor}
    backgroundColorOnHover={backgroundColorOnHover}
    textColorOnHover={textColorOnHover}
  />
);

export default Button;
