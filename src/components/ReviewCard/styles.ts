import styled from 'styled-components';
import { ReactComponent as StarFromSvg } from '../../assets/review-star.svg';

interface IProps {
  isLeft: boolean;
}

export const Container = styled.div<IProps>`
  width: 300px;
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

export const Star = styled(StarFromSvg)`
  width: 11px;
  height: 11px;
  color: ${props => props.theme.salmon};

  path {
    stroke: ${props => props.theme.salmon};
  }
`;
