import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .input-range__slider {
    background-color: ${props => props.theme.salmon};
    border: 1px solid ${props => props.theme.salmon};
    height: 16px;
    width: 16px;
    margin-top: -10px;
  }

  .input-range__track {
    background-color: ${props => props.theme.orange};
    border-radius: 24px;
    height: 4px;
  }

  .input-range__track--active {
    background-color: ${props => props.theme.salmon};
  }
`;
