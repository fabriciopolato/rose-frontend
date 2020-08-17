import styled from 'styled-components';

interface IProps {
  isReversed: boolean;
}

export const Container = styled.div<IProps>`
  width: 100%;
  padding: 0 10px;
  margin-top: 16px;

  & > article {
    width: 100%;
    height: 124px;

    display: flex;
    flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
    justify-content: space-between;
    align-items: center;

    background: ${props => (props.isReversed ? props.theme.salmon : props.theme.orange)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    & > figure {
      height: 100%;

      & > img {
        height: 100%;
      }
    }

    & > aside {
      height: 100%;
      padding: 16px;
      color: ${props => props.theme.black};
      text-align: ${props => (props.isReversed ? 'right' : 'left')};

      & > h3 {
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 8px;
      }

      & > p {
        font-weight: normal;
        font-size: 1.1rem;
      }
    }
  }
`;
