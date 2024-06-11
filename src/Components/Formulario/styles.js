// styles.js
import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledButton = styled.button`
  background-color: #547B96;
  padding: 0px 27px;
  height: 40px;
  border: solid 1px #3F5C70;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: white;
  border-radius: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 1.46rem;
  margin-top: 10px;
  width: 86vw;
`;

export const StyledForm = styled(Form)`
  /* Estilos do formulário */
  padding: 0px 22px 22px 22px;
`;

export const StyledFieldWrapper = styled.div`
  color: black;
  /* Estilos do wrapper do campo */
  margin-bottom: 0px;
`;

export const StyledField = styled(Field)`
  /* Estilos do campo */
  width: 254px;
  height: 36px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #727376;
  background-color: #F4F5F6;
  margin-bottom: 8px;
  color: #547B96;
  font-size: 24px;
  &:focus {
    outline-color: #547B96;
    transition: 1s;
  }
  &::placeholder {
    font-size: 20px;
    color: #9E9D97;
  }

  /* Estilo condicional para borda vermelha em caso de erro */
  ${({ error }) => error && `
    outline: #F16246;
  `}
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
  margin-bottom: 5px;
`;
