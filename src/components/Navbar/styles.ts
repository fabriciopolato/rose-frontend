import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 11px 11px;
  height: 64px;
  padding: 0 16px;

  & > figure {
    height: 48px;

    & > img {
      height: 100%;
    }
  }
`;

export const Nav = styled.nav`
  width: 136px;
  height: 100%;
  padding-bottom: 24px;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
  }
`;
