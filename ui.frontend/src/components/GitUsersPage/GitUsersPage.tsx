import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { Container } from "../Container/Container";
import Input from "../Input/Input";
import { Button } from '../Button/Button';
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";

export interface GitUsersPage {
   
}
export type User = {
   html_url: string;
   avatar_url: string;
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

   const [user, setUser] = useState<User>();
   const [repos, setRepos] = useState([]);
  

   const getGitUsersData = useCallback(async () => {
      try{
         let res = await axios.get(`https://api.github.com/users/${gitUser}`);
         setUser(await res.data);
         console.log(res.data);
      }catch(e){
         console.log(e);
      }
      
   }, []);
   const getGitUsersRepos = useCallback(async () => {
      try{
         let res = await axios.get(`https://api.github.com/users/${gitUser}/repos`);
         setRepos(await res.data);
         console.log(res.data);
      }catch(e){
         console.log(e);
      }
   }, []);

   useEffect(()=> {
      if (gitUser) {
         getGitUsersData();
         getGitUsersRepos()
       }
     }, []);

   return (
   <>
      <Container> 
         <img src={user?.avatar_url} alt={user?.name} />
         <h1>{user?.name}</h1>
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


