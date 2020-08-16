import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  min-height: 100vh;
  font-size: 1.3rem;
  color: ${props => props.theme.black};

  #review {
    > h2 {
      margin: 43px 0 20px;

      font-size: 1.9rem;
      line-height: 23px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      min-height: 37px;

      margin-bottom: 5px;

      > span {
        color: ${props => props.theme.white};
        font-size: 1.3rem;
        text-transform: uppercase;
      }

      > div {
        display: flex;
        justify-content: center;
      }
    }

    label {
      position: relative;

      font-size: 1.1rem;
      color: ${props => props.theme.white};

      > textarea {
        resize: none;

        height: 96px;
        width: 100%;

        margin: 3px 0 9px;
        padding: 3px 8px;

        font-size: 1.2rem;
        color: ${props => props.theme.black};

        background: ${props => props.theme.white};
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 9px;

        ::placeholder {
          height: 100%;

          text-align: right;
          line-height: 168px;
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }

    > button {
      display: block;

      margin: 0 auto 12px;
      padding: 12px 28px;

      font-size: 1.1rem;
      text-transform: uppercase;
    }
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProfileCard = styled.div`
  display: flex;
  height: 205px;
  overflow: hidden;
  background-color: ${props => props.theme.salmon};
  border-radius: 11px;
  margin: 24px 10px 0 0;

  h1 {
    font-family: 'Museo';
    font-size: 2rem;
    margin: 0;
    margin-bottom: 8px;
  }

  & > div {
    padding: 19px 5px 2px 21px;
  }

  & > figure {
    height: 205px;

    img {
      width: 169px;
      border-radius: 11px;
      height: 100%;
    }
  }
  strong {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 11px;
  }
`;

export const CredentialSection = styled.section`
  display: flex;
  align-items: center;

  p {
    margin-right: 38px;
  }
`;

export const ReviewSection = styled.section`
  display: flex;
  align-items: center;
  margin: 4px 0 16px 0;

  p {
    font-size: 0.9rem;
    text-decoration: underline;
    margin-left: 7px;
  }
`;
export const IconsContact = styled.section`
  & > svg {
    margin: 0 40px 8px 5px;
  }
`;

export const ShortDescription = styled.section`
  background-color: ${props => props.theme.orange};
  margin-left: auto;
  width: 348px;
  height: 136px;
  border-radius: 11px;

  p {
    font-size: 1.3rem;
    text-align: right;
    padding: 16px 10px 25px 12px;
  }
`;

export const Schedule = styled.section`
  background-color: ${props => props.theme.salmon};
  margin-left: right;
  width: 348px;
  height: 169px;
  border-radius: 11px;
  padding: 0 7px;

  input {
    display: block;
    height: 29px;
    text-align: center;
    margin-bottom: 19px;
  }

  p {
    font-size: 1rem;
    text-align: right;
    display: block;
    margin: 0 auto;
  }

  & > h2 {
    font-family: 'Museo', serif;
    font-size: 1.7rem;
    padding: 16px 0 10px 12px;
  }
`;

export const FullDescription = styled.section`
  background-color: ${props => props.theme.orange};
  height: 100%;
  width: 348px;
  border-radius: 11px;
  margin-left: auto;

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

export const ProfessionalReviews = styled.section`
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

  ${props => props.isReversed
    && css`
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
