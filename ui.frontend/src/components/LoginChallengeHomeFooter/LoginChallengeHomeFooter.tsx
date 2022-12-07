import React, { useState, useEffect } from "react"
import { Container } from '../Container/Container';
import Counter from "../Counter/Counter";
import "./LoginChallengeHomeFooter.scss"
import Button from '../Button/Button';

export interface LoginChallengeHomeFooterProps {
   children: React.ReactNode;
   section_msg?: string,
   aplication_refresh?: string,
   search_button?: string,
   logout_button?: string   
}

export const LoginChallengeHomeFooterEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }
 const LoginChallengeHomeFooter = ({
   section_msg=`Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
   Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.`,
   aplication_refresh = "Application refresh in",
   search_button = "Acessar Busca",
   logout_button = 'Logout'
 }: LoginChallengeHomeFooterProps ): JSX.Element => { 
   return (
      <Container className="home-footer-container" flex justify_content="space-between">
         <Container className="home-footer-content" justify_content="center" flex> 
            <Container className="home-footer-content-section-msg" flex >
               <span> {section_msg} </span>
            </Container>
            <div className="home-footer-content-divisor"> </div>
            <Container flex className="home-footer-content-aplication-refresh">
               <span> {aplication_refresh} </span>
               <Counter > </Counter>
            </Container>
         </Container>
         <Container flex className="home-footer-content-buttons"> 
         <Container flex className="search"> 
            <Button label={search_button}> </Button>
         </Container>
         <Container flex className="logout"> 
            <Button label={logout_button}> </Button>
         </Container>
         </Container>
      </Container>
      )
}

export default LoginChallengeHomeFooter;