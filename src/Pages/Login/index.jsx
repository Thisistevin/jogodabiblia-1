import React from 'react'
import  Container from './styles'
import LoginForm from 'Components/LoginTemplate';
import Button from 'Components/Button';

export default function Login() {
  return (
    <Container>
        <header />
        <LoginForm />
        <div>
          <Button />
        </div>
    </Container>
  );
}
