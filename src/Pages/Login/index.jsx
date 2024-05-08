import React from 'react'
import  Container, { ButtonContainer, JogoDaBibliaLable, Legenda } from './styles'
import LoginForm from 'Components/LoginTemplate';
import Button from 'Components/Button';
import MyForm from 'Components/Formulario';

export default function Login() {
  return (
    <Container>
        <header />
        <Container>
          <h1>Login</h1>
          <Legenda>Colabore conosco. Digite abaixo seu usuário e senha para começar a cadastrar suas perguntas.</Legenda>
        </Container>
        <MyForm />
        
        <ButtonContainer>
          <Button />
        </ButtonContainer>
        <JogoDaBibliaLable>Jogo da Bíblia Ⓒ 2022</JogoDaBibliaLable>
    </Container>
  );
}
