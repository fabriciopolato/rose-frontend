import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  min-height: calc(100vh - 64px - 131px);
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardQuestions = styled.div`
  background: ${props => props.theme.salmon};
  border-radius: 20px;
  width: 230px;
  height: 130px;
  padding: 32px 40px 32px 10px;
  margin-bottom: 10px;

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
  padding: 25px;

  align-self: flex-end;

  & > label:last-of-type {
    margin-bottom: 10px;
  }

  & > input[type='text'] {
    margin-bottom: 18px;
  }

  & > button {
    width: 100%;
    border-radius: 20px;
    padding: 5px 14px 3px 21px;
  }
`;
