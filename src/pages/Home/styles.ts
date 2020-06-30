import styled from 'styled-components';
import bg from '../../assets/bg.svg';

export const Container = styled.div`
  background: url(${bg}) 0 0 no-repeat;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${props => props.theme.cornFlowerBlue};
  border-radius: 20px;
  margin: 10px;
  overflow: hidden;
  position: relative;

  & > article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    font-size: 1.3rem;

    & > figure {
      /* height: 100%; */
      position: absolute;
      bottom: -3px;
      right: 0;

      & > img {
        height: 100%;
        border-radius: 20px;
        margin-top: 20px;
      }
    }

    & > div {
      padding: 16px 8px;
      max-width: 50%;

      & > h1 {
        font-size: 1.3rem;
        margin: 0;
      }
    }
  }
`;

export const Title = styled.div`
  font-family: Museo;
  font-weight: 600;
  font-size: 2.4rem;
  text-align: center;
  margin: 16px 0;

  color: ${props => props.theme.white};
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;

  button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 158px;
  }
`;
