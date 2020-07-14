import styled, { css } from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.salmon};
  width: 348px;
  border-radius: 11px;
  margin-right: auto;
  padding: 0 10px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;
    margin: 0 29px 0 19px;

    > h2 {
      font-family: 'Museo';
      font-size: 2rem;
    }
  }
`;

interface IPropsReviewsHiddenContent {
  isOpen: boolean;
  height: number;
}

export const ProfessionalReviewsHiddenContent = styled.section<IPropsReviewsHiddenContent>`
  overflow: hidden;
  height: ${props => (props.isOpen ? `${String(props.height)}px` : 0)};
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: height 600ms;

  h2 {
    font-family: 'Museo';
    margin-bottom: 18px;
    text-align: center;
  }

  > p {
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.36);
    font-size: 1.2rem;
    margin: 0 0 29px 12px !important;
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

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.white};
  margin: 18px 0 13px;

  h2 {
    font-family: 'Museo';
    font-size: 2rem;
    margin-bottom: 12px;
  }

  h4 {
    font-weight: 100;
    font-size: 1.6rem;
    margin-bottom: 2px;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }

  button {
    font-size: 1.6rem;
    width: 190px;
    height: 47px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
