import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: flex-start;

  font-weight: 600;
  font-size: 14px;

  color: ${props => props.theme.white};

  input[type='checkbox'] {
    all: unset;
    position: relative;
    cursor: pointer;
    margin-right: 36px;
    margin-bottom: 26px;
  }

  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 2px solid ${props => props.theme.white};
    border-radius: 3px;
    background-color: ${props => props.theme.red};
  }

  input[type='checkbox']:checked:before {
    background-color: ${props => props.theme.white};
  }

  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid ${props => props.theme.red};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;
