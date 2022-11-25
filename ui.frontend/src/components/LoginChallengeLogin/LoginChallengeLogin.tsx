import React  from "react"
import Container from "../Container/Container.styled";


export interface LoginChallengeLoginProps {
    image: {src: string},
    title: string;
    button: string; } 

export const LoginChallengeLoginEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeLogin = ({

    title="inseria um título", button="botão", image={src:""},

 }: LoginChallengeLoginProps ): JSX.Element => { 
   
    return <Container displayFlex>

      <div> 
         <h1> {title} </h1>
         <button>{button}</button>
      </div>

      <div><img src={image.src}></img></div>

   
    </Container>
 }

 export default LoginChallengeLogin;