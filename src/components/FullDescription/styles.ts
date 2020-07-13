import styled, { css } from 'styled-components';

export const Container = styled.div`
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

// interface IPropsReviewsHiddenContent {
//   isOpen: boolean;
//   height: number;
// }

// export const ProfessionalReviewsHiddenContent = styled.section<IPropsReviewsHiddenContent>`
//   overflow: hidden;
//   height: ${props => (props.isOpen ? `${String(props.height)}px` : 0)};
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   transition: height 600ms;
// `;
