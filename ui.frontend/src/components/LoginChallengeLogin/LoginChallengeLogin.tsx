import React  from "react"
import { Container } from "../Container/Container";
import { Button } from '../Button/Button';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    html, body {
      margin:0;
      padding:0
    }
    .page{
      max-width: 100%;
    }
  }
`
export interface LoginChallengeLoginProps {
    image: {src: string},
    title: string;
    button: string; 
   } 

export const LoginChallengeLoginEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeLogin = ({

    title="inseria um título", button="botão", image={src:""},

 }: LoginChallengeLoginProps ): JSX.Element => { 
   
    return (
    <Container flex>
      <Container>  
         <h1> {title} </h1>
         <form>
            <input type="text" />
            <input type="text" />
         </form>
         <Button primary label={button}></Button> 
      </Container>
     
      <Container>
         <img src={image.src}/>         
      </Container>

    </Container>)
 }

 export default LoginChallengeLogin;