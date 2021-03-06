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
  margin: 0 25px 0 30px;

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
  }

  p {
    color: ${props => props.theme.black};
    font-size: 1rem;
  }
`;

// export const NextSchedulesContainer = styled.div``;
export const NextSchedules = styled.div`
  color: ${props => props.theme.white};

  section {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    font-size: 1.6rem;

    > h2 {
      font-weight: bold;
      font-size: 1.6rem;
    }

    > p {
      margin-bottom: 22px;
    }
  }

  > div {
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
  }

  button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 10px 15px;
    font-size: 1.1rem;
    width: 140px;
    height: 38px;
  }
`;

export const PastSchedules = styled.div`
  color: ${props => props.theme.white};
  margin-bottom: 22px;
  section {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    font-size: 1.6rem;

    > h2 {
      font-weight: bold;
      font-size: 1.6rem;
      margin-bottom: 7px;
    }

    div {
      display: flex;

      > p {
        margin: 0 25px;
      }
      span {
        margin-bottom: 11px;
      }
    }
  }
`;

export const Payments = styled.div`
  color: ${props => props.theme.white};
  margin-bottom: 22px;
  section {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    font-size: 1.6rem;

    > h2 {
      font-weight: bold;
      font-size: 1.6rem;
      margin-bottom: 7px;
    }

    div {
      display: flex;
      justify-content: space-between;

      span {
        margin: 0 33px 11px 0;
        color: #0081f0;
        font-size: 1rem;
      }
    }
  }
`;

export const TherapyGroups = styled.div`
  > p {
    font-size: 1rem;
    margin: 0 30px;
    /* text-align: justify; */
  }

  > button {
    height: 38px;
    width: 140px;
    font-size: 1.1rem;
    display: block;
    margin: 24px auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
  }
`;
