import React, { useState, useEffect } from "react"
import Clock from "../Clock/Clock";
import { Container } from '../Container/Container';
import Weather from "../Weather/Weather";


export interface LoginChallengeHomeHeaderProps {
    image: {src: string}
}

export const LoginChallengeHomeHeaderEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }
 const LoginChallengeHomeHeader = ({

    image={src:""}

 }: LoginChallengeHomeHeaderProps ): JSX.Element => { 
   return (
      <Container flex justify_content="space-between">
         
         <img src={image.src}/> 
         
         <Container justify_content="center" > 
         <Clock></Clock>
         </Container>
         

         <Weather></Weather>

      </Container>
      )
}

export default LoginChallengeHomeHeader;