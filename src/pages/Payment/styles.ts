import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 0 10px;
  font-family: 'Raleway';

  > h1 {
    font-family: 'Museo';
    font-size: 2.3rem;
    color: ${props => props.theme.white};

    margin: 35px 0 23px 2px;
  }
`;
