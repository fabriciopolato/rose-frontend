import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  button {
    position: fixed;
    text-transform: uppercase;
    display: block;
    font-size: 1.1rem;
    bottom: 9px;
    left: 115px;
  }
`;

export const ProfessionalInfo = styled.section`
  margin: 52px 0 32px 0;
  font-size: 1.3rem;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Schedules = styled.div`
  background-color: ${props => props.theme.salmon};
  margin-right: 10px;
  padding: 32px 0;
  border-radius: 11px;

  h2 {
    display: block;
    margin: 0 40px;
    font-size: 1.7rem;
  }
`;
