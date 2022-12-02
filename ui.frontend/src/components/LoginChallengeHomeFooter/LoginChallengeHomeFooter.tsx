import React, { useState, useEffect } from "react"
import { Container } from '../Container/Container';
import Counter from "../Counter/Counter";



export interface LoginChallengeHomeFooterProps {
   section_msg: string,
   aplication_refresh: string,
   search_button: string,
   logout_button: string   
}

export const LoginChallengeHomeFooterEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }
 const LoginChallengeHomeFooter = ({
   section_msg,
   aplication_refresh,
   search_button,
   logout_button
 }: LoginChallengeHomeFooterProps ): JSX.Element => { 
   return (
      <Container flex>
<h1>footer</h1>
         <Container> <span> {section_msg} </span></Container>
         <Container> <span> {aplication_refresh} </span></Container>
         <Counter > </Counter>
         <Container> <span> {search_button} </span></Container>
         <Container> <span> {logout_button} </span></Container>

      </Container>
      )
}

export default LoginChallengeHomeFooter;