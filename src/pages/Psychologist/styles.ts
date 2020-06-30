import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  & > div #filters {
    height: 451px;
    overflow: hidden;
    overflow-y: scroll;

    & > button {
      border-radius: 20px;
      padding: 4px 17.5px;
      font-size: 1.4rem;
      display: block;
      margin: 0 auto;
      margin-top: 14px;
    }

    & > section {
      input[type='range'] {
        margin-bottom: 30px;
      }

      input[type='text'] {
        border-radius: 11px;
        background-color: ${props => props.theme.salmon};
        padding: 8px 0 8px 12px;
        font-size: 1.3rem;
      }

      h2 {
        font-family: Museo;
        font-weight: 600;
        font-size: 2rem;
        color: ${props => props.theme.salmon};
        margin-bottom: 15px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  & > h1 {
    font-weight: normal;
    font-size: 21px;

    color: ${props => props.theme.black};
  }

  & > button {
    outline: none;
    width: 100px;
    height: 29px;
    font-size: 1.3rem;
    padding: 0 32px;
    background-color: ${props => props.theme.white};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 11px;
  }
`;

export const FiltersSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  column-gap: normal;
  row-gap: 12px;
  margin-bottom: 30px;
`;
