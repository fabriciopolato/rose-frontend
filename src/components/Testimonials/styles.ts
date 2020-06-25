import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.salmon};
  padding: 30px 10px;
  margin-top: 13px;
  border-radius: 11px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Museo';
    margin-bottom: 18px;
    text-align: center;
  }
`;
