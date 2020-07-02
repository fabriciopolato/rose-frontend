import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2px 0 2px 8px;

  font-family: Raleway;
  font-weight: normal;
  font-size: 1.4rem;

  color: ${props => props.theme.black};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
