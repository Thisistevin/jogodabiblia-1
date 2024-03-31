import React from 'react'
import { Container, Legenda } from './styles'
import Titulo from '../Titulo'
import Texto from '../Texto'
import Input from '../Input'

export default function FormLC() {
  return (
    <Container>
        <Titulo />
        <Legenda>Colabore conosco. Digite abaixo seu usuário e senha para começar a cadastrar suas perguntas.</Legenda>
        <Input />
        <Input />
    </Container>
  )
}
