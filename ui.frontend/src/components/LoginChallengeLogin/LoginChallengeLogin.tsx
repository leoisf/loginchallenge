import React, { Fragment }  from "react"
import { Container } from "../Container/Container";
import { Button } from '../Button/Button';
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Input from "../Input/Input";
import './LoginChallengeLogin.scss';


export interface LoginChallengeLoginProps {
    title: string;
    sub_title: string;
    button: string;
    image: {src: string},
} 

export const LoginChallengeLoginEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeLogin = ({
    title="Olá,", 
    sub_title="Para continuar navegando de forma segura, efetue o login na rede.", 
    button="Continuar", 
    image={src:"/assets/image2.png"
   },
 }: LoginChallengeLoginProps ): JSX.Element => { 
   
    return (
      <Container justify_content="space-between" className="login-container">
         <GlobalStyle />
         <Container flex>

            <Container className="login-content-info" >
               <Container className="login-content-info-wrapper" > 
               <div className="login-title" >
                  <h1> {title} </h1>  
                  <h2> {sub_title}</h2>                
               </div>  
               <form className="login-form">
                  <span>Login</span>
                  <Input type="text" placeholder="User" />
                  <i className="users" aria-hidden="true"style={{ position: 'absolute', left: 6 }}
              />
                  <Input type="password" placeholder="Password"/>
                  <Button primary label={button} type="submit"> </Button> 
               </form>
               </Container>
            </Container>

            <Container className="login-content-img" style={{ backgroundImage: `url(${image.src})`}} >
            </Container>

         </Container>
      </Container>
    )
 }
 export default LoginChallengeLogin;