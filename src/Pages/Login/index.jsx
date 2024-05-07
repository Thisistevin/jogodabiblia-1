import React from 'react'
import  Container, { ButtonContainer, JogoDaBibliaLable } from './styles'
import LoginForm from 'Components/LoginTemplate';
import Button from 'Components/Button';
import MyForm from 'Components/Formulario';

export default function Login() {
  return (
    <Container>
        <header />
        <MyForm />
        <LoginForm />
        <ButtonContainer>
          <Button />
        </ButtonContainer>
        <JogoDaBibliaLable>Jogo da Bíblia Ⓒ 2022</JogoDaBibliaLable>
    </Container>
  );
}
