import React from 'react'
import  Container, { ButtonContainer, JogoDaBibliaLable } from './styles'
import LoginForm from 'Components/LoginTemplate';
import Button from 'Components/Button';

export default function Login() {
  return (
    <Container>
        <header />
        <LoginForm />
        <ButtonContainer>
          <Button />
        </ButtonContainer>
        <JogoDaBibliaLable>Jogo da Bíblia Ⓒ 2022</JogoDaBibliaLable>
    </Container>
  );
}
