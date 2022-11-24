import React  from "react"

export interface LoginChallengeHomeProps {
    image: {src: string},
    title: string;
    button: string; } 

export const LoginChallengeHomeEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeHome = ({

    title="inseria um título", button="botão", image={src:""},

 }: LoginChallengeHomeProps ): JSX.Element => { 
   
    return<>

    <h1> insira um conteudo </h1>
    
    </>
 }

 export default LoginChallengeHome;