import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  min-height: 100vh;
  font-size: 1.3rem;
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