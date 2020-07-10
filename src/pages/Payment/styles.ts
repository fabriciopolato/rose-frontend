import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 0 10px;
  font-family: 'Raleway';

  form {
    padding: 16px 22px 23px;
    margin-bottom: 11px;

    > button {
      text-transform: uppercase;
      text-align: center;
      font-style: normal;
      display: block;
      margin: 0 auto;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }

    label {
      font-size: 1rem;
      margin: 0 14px;
    }

    > section {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;

      > div {
      }
    }
  }

  > h1 {
    font-family: 'Museo';
    font-size: 2.3rem;
    color: ${props => props.theme.white};

    margin: 35px 0 23px 2px;
  }
`;

export const InputExpirationCVV = styled.div`
  border: 1px solid #ff7700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff7700;
  padding: 0 14px;
  width: 143px;
  border-radius: 11px;
  height: 40px;
  background: transparent;
`;

export const FormContainer = styled.div`
  background-color: ${props => props.theme.salmon};
  border-radius: 11px;
`;

export const InputPayment = styled.input`
  border-radius: 11px;
  background: transparent;
  border: none;

  ::placeholder {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid #ff7700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff7700;
  padding: 0 14px;

  border-radius: 11px;
  height: 40px;
  background: transparent;
`;

export const ProtectedInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 21px 0;

  > p {
    font-size: 1.2rem;
    margin-left: 5px;
  }
`;

export const SaveInfoToggle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 38px 14px;

  > p {
    font-size: 1rem;
  }
`;
