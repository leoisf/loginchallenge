import React  from "react"
import { Container } from '../Container/Container';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import './LoginChallengeHome.scss';
import LoginChallengeHomeHeader from '../LoginChallengeHomeHeader/LoginChallengeHomeHeader';
import LoginChallengeHomeFooter from '../LoginChallengeHomeFooter/LoginChallengeHomeFooter';

export interface LoginChallengeHomeProps {
   children: React.ReactNode;
   image: {src: string},
   text1: string;
   text2: string;
   text3: string;
   text4: string;
} 

export const LoginChallengeHomeEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeHome = ({

   image={src:"/assets/home_background.png"},
   text1="Our mission is ",
   text2="to transform the world ",
   text3="building digital experiences ",
   text4="that enable our client’s growtho ",

 }: LoginChallengeHomeProps ): JSX.Element => { 
   
    return(
      <Container className="home-container" justify_content="right"  style={{ backgroundImage: `url(${image.src})`}}>
         <GlobalStyle/>
            <LoginChallengeHomeHeader>
            </LoginChallengeHomeHeader>
         <Container className="home-content" flex justify_content="right">
         <Container>
            <Container className="home-content-text1" justify_content="right" >
               <span>{text1}</span>
               <p>Nossa missão é</p>
            </Container>
            <Container className="home-content-text2" justify_content="right">
               <span>{text2}</span>
               <p>transformar o mundo</p>
            </Container>
            <Container className="home-content-text4" justify_content="right">
               <span>{text3}</span>
               <p>construindo experiências digitais</p>
            </Container>
            <Container className="home-content-text4" justify_content="right">
               <span>{text4}</span>
               <p>que permitam o crescimento dos nossos clientes</p>  
            </Container>             
         </Container>
         </Container>
         <LoginChallengeHomeFooter> </LoginChallengeHomeFooter>
      </Container>
    )
 }

 export default LoginChallengeHome;