import React from 'react'
import  Container from './styles'
import Titulo from '../../Components/Titulo';
import FormLC from 'Components/FormularioLC';

export default function Login() {
  return (
    <Container>
        <header />
        
        <form>
          <input type="text"/>
        </form>
        <FormLC />
    </Container>
  );
}
