import styled, { css } from 'styled-components';

interface IProps {
  isTherapyGroup: boolean;
}

export const Card = styled.div<IProps>`
  ${props =>
    props.isTherapyGroup
      ? css`
          background: ${props => props.theme.red};
          color: ${props => props.theme.white};
        `
      : css`
          background: ${props => props.theme.orange};
          color: ${props => props.theme.black};

          & > h2 {
            color: ${props => props.theme.black};
          }

          & > ul {
            & > li {
              color: ${props => props.theme.black};
            }
          }

          & > div {
            & > strong {
              color: ${props => props.theme.black};
            }

            & > p {
              color: ${props => props.theme.black};
            }
          }
        `}

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 0 auto;
  width: 260px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > figure {
    width: 100%;
    height: 184px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 100%;
      border-radius: 20px;
    }
  }

  & > h2 {
    font-family: 'Museo';
    font-weight: 600;
    font-size: 2.4rem;
    text-align: center;
    margin: 12px;

    /* color: ${props => props.theme.black}; */
  }

  & > section {
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    & > ul {
      display: flex;
      flex-direction: column;
      margin: 0;

      & > li {
        font-weight: bold;
        font-size: 1.1rem;

        /* color: ${props => props.theme.black}; */
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > strong {
        font-weight: bold;
        font-size: 1.3rem;

        /* color: ${props => props.theme.black}; */
      }

      & > p {
        margin: 0;
        font-weight: normal;
        font-size: 1.3rem;

        /* color: ${props => props.theme.black}; */
      }
    }
  }

  button {
    width: 140px;
    padding: 8px 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 21px;
    /* color: ${props => props.theme.black}; */
  }
`;
