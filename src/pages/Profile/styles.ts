import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 0 10px;
  font-family: 'Raleway';

  > h1 {
    font-family: 'Museo';
    font-size: 2.3rem;
    color: ${props => props.theme.white};

    margin: 35px 0 23px 2px;
  }
`;

export const MyDoctorContainer = styled.div`
  margin-bottom: 13px;
`;

export const MyDoctor = styled.div`
  display: flex;
  color: ${props => props.theme.white};
  justify-content: space-between;
  padding-bottom: 15px;
  margin: 0 15px;

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
  }

  p {
    color: ${props => props.theme.black};
    font-size: 1rem;
  }
`;

export const NextSchedulesContainer = styled.div``;
export const NextSchedules = styled.div``;
