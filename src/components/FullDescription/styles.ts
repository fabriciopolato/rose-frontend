import styled, { css } from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.orange};
  height: 100%;
  width: 348px;
  border-radius: 11px;
  margin-left: auto;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;
    margin-right: 16px;

    > h2 {
      font-family: 'Museo';
      font-size: 2rem;
    }
  }
`;

interface IPropsTriangle {
  isReversed: boolean;
}

export const Triangle = styled.div<IPropsTriangle>`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid ${props => props.theme.white};
  margin-left: 31px;

  ${props =>
    props.isReversed &&
    css`
      transform: rotate(180deg);
    `}
`;

interface IPropsFullDescriptionHiddenContent {
  isOpen: boolean;
  height: number;
}

export const FullDescriptionHiddenContent = styled.section<IPropsFullDescriptionHiddenContent>`
  overflow: hidden;
  height: ${props => (props.isOpen ? `${String(props.height)}px` : 0)};
  padding: ${props => (props.isOpen ? '0 15px 19px 6px' : '0 15px 0 6px')};

  transition: height 600ms;
`;

export const FullDescriptionItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;

  width: 100%;
  margin-bottom: 16px;

  > h3 {
    font-family: 'Museo';
    font-weight: bold;
  }

  li {
    margin-bottom: 3px;
  }
`;
