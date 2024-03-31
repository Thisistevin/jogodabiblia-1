//import './App.css';
//import Banner from './Banner';
//import Title from './Title';
//import Paragraph from './Paragraph';
//import Input from './Input';
//import Botao from './Botao'
import { createGlobalStyle } from "styled-components";
import Login from "./Pages/Login";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100..900&display=swap');  
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    background-color: #F4F5F6;
    width: 100vw;
  }
  footer{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  span{
    color: #D2D2D2;
    font-size: 12px;
  }
`;

function App() { 
  return (
    <div>
      <GlobalStyles />
      <Login />
    </div>
    
  );
} 

export default App;
