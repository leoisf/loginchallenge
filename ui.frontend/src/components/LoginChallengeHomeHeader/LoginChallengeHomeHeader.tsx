import React, { useState, useEffect } from "react"
import Clock from "../Clock/Clock";
import { Container } from '../Container/Container';
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Weather from "../Weather/Weather";
import "./LoginChallengeHomeHeader.scss"

export interface LoginChallengeHomeHeaderProps {
  children: React.ReactNode;
  image?: {src: string}
}

export const LoginChallengeHomeHeaderEditConfig = {

   emptyLabel: "insira aqui um conteúdo",
   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }
 const LoginChallengeHomeHeader = ({

   image={src:"/assets/compassuol-logo-black.png"}

 }: LoginChallengeHomeHeaderProps ): JSX.Element => { 
   return (
      <Container className="home-header-container" flex justify_content="space-between">
         <GlobalStyle />
         <Container className="home-header-content-logo">
             <img src={image.src}/> 
         </Container>
         <Container className="home-header-content-clock" justify_content="center" > 
            <Clock></Clock>
         </Container>
         <Container className="home-header-content-weather" flex justify_content="center">
             <Weather></Weather>
         </Container>
      </Container>
      )
}

export default LoginChallengeHomeHeader;