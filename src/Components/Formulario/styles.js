import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export default styled.button`
  background-color: #547B96;
  padding: 0px 27px;
  height: 40px;
  border: solid 1px #3F5C70;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: white;
  border-radius: 5px;
`;

export const StyledForm = styled(Form)`
  /* Estilos do formulário */
  padding: 0px 22px 22px 22px;
`;

export const StyledFieldWrapper = styled.div`
  color: black;
  /* Estilos do wrapper do campo */
`;

export const StyledField = styled(Field)`
  /* Estilos do campo */
  width: 274px;
  height: 56px;
  border-radius: 5px;
  border: solid 1px #727376;
  background-color: #F4F5F6;
  margin-bottom: 8px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: black;
  /* Estilos da mensagem de erro */
`;

