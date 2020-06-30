import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    -webkit-appearance: none;
    height: 4px;
    width: 100%;
    background-color: ${props => props.theme.orange};
    border-radius: 999px;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.salmon};
  }

  input::-webkit-slider-runnable-track {
    /* -webkit-appearance: none; */
    /* background-color: ${props => props.theme.orange}; */
  }
`;
