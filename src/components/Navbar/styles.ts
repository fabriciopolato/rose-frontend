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
  position: relative;

  & > figure {
    height: 48px;

    & > img {
      height: 100%;
    }
  }

  #login {
    h2 {
      margin: 0;
      margin-top: 20px;
    }
  }

  #menu {
    width: 221px;
    height: auto;
    position: relative;
    overflow: hidden;

    figure {
      position: absolute;
      bottom: 0;
      right: 0;

      img {
        width: 100%;
      }
    }

    h2 {
      margin-top: 18px;
    }

    li {
      margin-bottom: 11px;
    }
  }

  hr {
    border: 0.836111px solid rgba(0, 0, 0, 0.15);
    position: relative;
  }

  form {
    label {
      font-size: 1.1rem;
      color: ${props => props.theme.black};
    }
  }
`;

export const DivisionLine = styled.p`
  margin-top: -10px;
  color: rgba(0, 0, 0, 0.15);

  span {
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    margin: 0 5px;
  }
`;

export const PrivacyTerms = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.black};
`;

export const Nav = styled.nav`
  width: 136px;
  height: 100%;
  padding-bottom: 14px;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;

    transition: all 400ms ease;

    & > li {
      height: 16px;
    }

    & > li:hover {
      cursor: pointer;
      filter: opacity(50%);

      transition: all 400ms ease;
    }
  }
`;
