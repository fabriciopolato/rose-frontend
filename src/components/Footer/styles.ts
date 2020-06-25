import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PrimaryContent = styled.div`
  height: 91px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 15px 10px;
  font-size: 1rem;
  background-color: ${props => props.theme.cornFlowerBlue};
  border-radius: 11px;
  color: ${props => props.theme.white};

  & > ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > li {
      margin-bottom: 4px;

      & > div {
        display: flex;
        justify-content: space-between;
        font-size: 1.7rem;
        margin: 5px 25px 0 0;
        svg {
        }
      }
    }
  }
`;

export const SecondaryContent = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  background-color: ${props => props.theme.lightSteelBlue};
  color: ${props => props.theme.white};
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  p {
    margin: 8px 0 0 5px;
  }
`;
