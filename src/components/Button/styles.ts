import styled from 'styled-components';

interface IProps {
  backgroundColor: string;
  textColor: string;
  backgroundColorOnHover: string;
  textColorOnHover: string;
}

export const StyledButton = styled.button<IProps>`
  padding: 4px 17px;
  font-size: 1.6rem;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 20px;
  color: ${props => props.theme.red};
  /* transition: all 0.3s ease; */
  &:hover {
    background-color: ${props => props.backgroundColorOnHover};
    color: ${props => props.textColorOnHover};
    transition: all 0.3s ease-in-out;
  }
`;
