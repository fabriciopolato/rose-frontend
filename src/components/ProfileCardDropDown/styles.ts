import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.orange};
  border-radius: 11px;
  margin-bottom: 2px;
  color: ${props => props.theme.black};
  overflow: hidden;
  transition: all 0.2s;

  h2 {
    font-size: 1.9rem;
    font-weight: 500;
  }
`;

interface IPropsContent {
  isOpen: boolean;
}

export const Content = styled.div<IPropsContent>`
  height: ${props => (props.isOpen ? '100%' : '0')};
  overflow: hidden;
`;

export const CardTitle = styled.div`
  padding: 17px 30px;
  display: flex;
  justify-content: space-between;
`;
