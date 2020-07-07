import styled, { css } from 'styled-components';

interface IProps {
  toggle: boolean;
}

export const Container = styled.div<IProps>`
  visibility: ${props => (props.toggle ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100%;
  padding: 0 25px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  animation: ${props => (props.toggle ? 'fadeIn' : 'fadeOut')} 400ms ease forwards;
  transition: visibility 400ms linear;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 12px;

  background: linear-gradient(180deg, #e8798d 9.38%, #d94a64 89.06%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  z-index: 20;

  & > h2 {
    font-family: 'Museo';
    font-weight: 600;
    font-size: 2.4rem;

    color: ${props => props.theme.white};

    margin-bottom: 24px;
  }

  & > ul {
    height: calc(100% - 51px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & > li {
      font-family: Raleway;
      font-weight: normal;
      font-size: 1.6rem;
      color: ${props => props.theme.white};
    }
  }
`;

interface IPropsCloseIcon {
  isLeft: boolean;
}

export const CloseIcon = styled.img<IPropsCloseIcon>`
  position: absolute;
  top: 24px;

  ${props =>
    props.isLeft
      ? css`
          left: 24px;
        `
      : css`
          right: 24px;
        `}
`;
