import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 16px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  & > h1 {
    font-weight: normal;
    font-size: 21px;
    margin-bottom: 14px;

    color: ${props => props.theme.black};
  }

  & > button {
    width: 100px;
    height: 29px;
    font-size: 1.3rem;
    padding: 0 32px;
    background-color: ${props => props.theme.white};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 11px;
  }
`;
