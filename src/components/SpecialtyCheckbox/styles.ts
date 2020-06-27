import styled from 'styled-components';

interface IProps {
  isChecked: boolean;
}

export const InputContainer = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 92px;
  height: 20px;

  background: ${props =>
    props.isChecked ? props.theme.lightSteelBlue : props.theme.salmon};
  border-radius: 11px;
`;

export const InputContent = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1.3rem;

  color: ${props => props.theme.red};
`;

export const InputCheckbox = styled.input`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  width: 92px;
  height: 20px;
`;
