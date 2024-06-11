// MyForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledFieldWrapper, StyledField, StyledErrorMessage, StyledButton, StyledButtonContainer } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
});

const MyForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <StyledForm>
        <StyledFieldWrapper>
          <StyledField 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            error={touched.email && errors.email}
          />
          <StyledErrorMessage name="email" component="div" />
        </StyledFieldWrapper>
        <StyledFieldWrapper>
          <StyledField 
            type="password" 
            name="password" 
            placeholder="Senha" 
            error={touched.password && errors.password}
          />
          <StyledErrorMessage name="password" component="div" />
        </StyledFieldWrapper>
        <StyledButtonContainer>
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    )}
  </Formik>
);

export default MyForm;
