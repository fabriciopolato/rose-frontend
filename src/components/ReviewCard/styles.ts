import styled from 'styled-components';

interface IProps {
  isLeft: boolean;
}

export const Container = styled.div<IProps>`
  width: 85%;
  background-color: ${props => props.theme.white};
  border-radius: 11px;
  margin-bottom: 8px;
  align-self: ${props => (props.isLeft ? 'flex-start' : 'flex-end')};
`;

export const Content = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 1rem;

  strong {
    font-weight: bold;
  }

  & > p {
    margin-bottom: 10px;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;
