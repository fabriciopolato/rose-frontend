import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${props => props.theme.white};
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0 8px 16px;

  font-family: Raleway;
  font-weight: normal;
  font-size: 1.6rem;

  color: ${props => props.theme.black};

  &::placeholder {
    color: #333;
  }
`;
