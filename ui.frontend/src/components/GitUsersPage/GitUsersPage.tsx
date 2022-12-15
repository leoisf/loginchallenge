import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { Container } from "../Container/Container";


export interface GitUsersPage {
   user: User
   
}
export type User = {
   html_url: string;
   login: string;
   id: number;
   name: string;
 };
 export type Repo = {
   id:string
   name: string
   html_url: string
 };
 
 

 const GitUsersPage = ({

 }: GitUsersPage ): JSX.Element => { 

   const gitUser = "leoisf";

   const [repos, setRepos] = useState([]);
  
   const getGitUsersRepos = useCallback(async () => {
      try{
         // let res = await axios.get(`${gitUser}`);
         // setRepos(await res.data);
         // console.log(res.data);
      }catch(e){
         console.log(e);
      }
   }, []);

   useEffect(()=> {
      if (gitUser) {
         getGitUsersRepos()
       }
     }, []);

   return (
   <>
      <Container> 
         
         <h1></h1>
      </Container>
       
       <Container> 
            {
               <div>
               {repos?.map((repo: User) => {
                  return <div key={repo.id}> 
                  
                  <a href={repo.html_url}>{repo.html_url}</a>
                  
                  </div>;
               })}
               </div>
            }
       </Container>
   </>
   )
}
export default GitUsersPage;


