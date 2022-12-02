import React  from "react"
import { Container } from '../Container/Container';

export interface LoginChallengeGitUserPageProps { 
   back_button: string;   
} 
export const LoginChallengeGitUserPageEditConfig = {
   emptyLabel: "insira aqui um conteúdo",
   isEmpty: (props: { text: any; }): boolean => !props || !props.text
 }
 const LoginChallengeGitUserPage = ({
   back_button="Insert a back button text", 
 }: LoginChallengeGitUserPageProps ): JSX.Element => { 
    return(
    <Container>
      <Container>
         <button>{back_button}</button>
      </Container>
    </Container>
    )
 }
 export default LoginChallengeGitUserPage;