import React  from "react"
import { Container } from '../../Container/Container';
import GitUsersSearch from "../../GitUsersSearch/GitUsersSearch";
import { GlobalStyle } from "../../GlobalStyle/GlobalStyle";
import './LoginChallengeSearchPage.scss';
export interface LoginChallengeSearchPageProps { 
   title_page: string
   sub_title: string
   search_button: string
   image_template: {src: string}
} 
export const LoginChallengeSearchPageEditConfig = {
   emptyLabel: "insira aqui um conteúdo",
   isEmpty: (props: { text: any; }): boolean => !props || !props.text
 }
 const LoginChallengeSearchPage = ({
   title_page="Busca", 
   sub_title= " Para encontrar o usuário desejado digite seu nome abaixo.",
   search_button="Buscar", 
   image_template={src:"/assets/search-page-image.png"}
 }: LoginChallengeSearchPageProps ): JSX.Element => { 
    return(
    <Container flex className="search-page-container" >
      <GlobalStyle/>

      <Container className="search-page-content-info">

      <Container className="search-page-content-info-wrapper"> 
         <Container className="search-page-title">
            <h1>{title_page}</h1>
            <h2>{sub_title}</h2>
         </Container>
         
         <GitUsersSearch> </GitUsersSearch>
      </Container>
        
      </Container>
      <Container className="search-page-content-img" style={{ backgroundImage: `url(${image_template.src})`}} >
      </Container>
    </Container>
    )
 }
 export default LoginChallengeSearchPage;