import React  from "react"
import { GitUser } from "../../../types/Types";
import Button from "../../Button/Button";
import { Container } from '../../Container/Container';
import GitUsersPage from "../../GitUsersPage/GitUsersPage";
import { GlobalStyle } from "../../GlobalStyle/GlobalStyle";
import "./LoginChallengeGitUserPage.scss"

export interface LoginChallengeGitUserPageProps { 
   back_button: string;
   user: GitUser;   
} 
export const LoginChallengeGitUserPageEditConfig = {
   emptyLabel: "insira aqui um conteúdo",
   isEmpty: (props: { text: any; }): boolean => !props || !props.text
 }
 const LoginChallengeGitUserPage = ({
   user={
      html_url: 'https://github.com/leoisf',
      avatar_url: 'https://avatars.githubusercontent.com/u/23709117?v=4',
      login: 'leoisf',
      id: 23709117,
      url: 'https://api.github.com/users/leoisf',
      name: 'Leonardo Isaac',
      bio: 'web developer',
      repos_url: 'https://api.github.com/users/leoisf/repos',
   },
   back_button="Voltar", 
 }: LoginChallengeGitUserPageProps ): JSX.Element => { 
    return(
    <Container className="git-user-page-container" flex justify_content="center">
      <GlobalStyle/>
      <Container className="git-user-page-content-info">
         <Container className="git-user-page-content-info-wrapper ">
            <Container flex justify_content="right" className="git-user-page-content-back-button ">
               <Button label="Voltar" type="button">{back_button}</Button>
            </Container>
            <GitUsersPage user={user}> </GitUsersPage>
         </Container>
      </Container>
    </Container>
    )
 }
 export default LoginChallengeGitUserPage;