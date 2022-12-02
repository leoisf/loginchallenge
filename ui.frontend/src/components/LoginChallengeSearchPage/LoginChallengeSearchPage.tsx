import React  from "react"
import { Container } from '../Container/Container';
import SearchPage from "../SearchPage/SearchPage";

export interface LoginChallengeSearchPageProps { 
   title_page: string;
   sub_title: string;
   search_button: string;
   image_template: {src: string} 
} 
export const LoginChallengeSearchPageEditConfig = {
   emptyLabel: "insira aqui um conteúdo",
   isEmpty: (props: { text: any; }): boolean => !props || !props.text
 }
 const LoginChallengeSearchPage = ({
   title_page="Insert a title", 
   sub_title= " insert a subtitle",
   search_button="Insert a button text", 
   image_template={src:""}
 }: LoginChallengeSearchPageProps ): JSX.Element => { 
    return(
    <Container>
      <Container>
         <h1>{title_page}</h1>
         <h2>{sub_title}</h2>
         <button>{search_button}</button>
         <SearchPage> </SearchPage>
      </Container>
      <Container>
      <img src={image_template.src}/>
    </Container>
    </Container>
    )
 }
 export default LoginChallengeSearchPage;