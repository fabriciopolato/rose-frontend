import styled from 'styled-components';

interface IProps {
  backgroundColor: string;
  textColor: string;
  backgroundColorOnHover: string;
  textColorOnHover: string;
}

export const StyledButton = styled.button<IProps>`
  outline: none;
  border: none;
  padding: 8px 16px;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  color: ${props => props.textColor};
  transition: all 200ms ease;

  &:hover {
    background-color: ${props => props.backgroundColorOnHover};
    color: ${props => props.textColorOnHover};
    transition: all 200ms ease;
  }
`;
