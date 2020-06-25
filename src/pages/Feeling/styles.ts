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

export const CardQuestions = styled.div`
  background: ${props => props.theme.salmon};
  border-radius: 20px;
  width: 230px;
  height: 130px;
  padding: 32px 40px 32px 10px;

  & > p {
    font-weight: 600;
    font-size: 1.9rem;
    color: ${props => props.theme.black};
  }
`;

export const CardCheckboxes = styled.div`
  background: ${props => props.theme.red};
  border-radius: 22px;
  width: 240px;
  height: 252px;
`;
