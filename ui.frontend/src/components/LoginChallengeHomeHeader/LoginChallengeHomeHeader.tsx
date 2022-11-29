import React, { useState, useEffect } from "react"
import { Container } from "../Container/Container";


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
         <Container>
            <img src={image.src}/> 
         </Container>
      </Container>
      )
}

export default LoginChallengeHomeHeader;