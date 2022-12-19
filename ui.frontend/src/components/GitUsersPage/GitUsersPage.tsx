import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { Container } from '../Container/Container';
import { GitUser, UserRepo } from '../../types/Types';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';

export interface GitUsersPage {
   children: React.ReactNode;
   user?: GitUser;
} 

 const GitUsersPage = ({
   user
}: GitUsersPage ): JSX.Element => { 

   const [gitUser, setUser] = useState({} as GitUser);
   const [repo, setRepo] = useState( [] as unknown as UserRepo );
   const [starred, setStarred] = useState( [] as unknown as UserRepo );
   let perPage = 4;

   const gitUserLogin = "leoisf";

   const getGitUsersData = useCallback(async () => {
      try{
         let res = await axios.get(`https://api.github.com/users/${gitUserLogin}`);
         setUser(await res.data);
         console.log(res.data);
      }catch(e){
         console.log(e);
      }
      
   }, []);
   const getGitUsersRepos = useCallback(async () => {
      
      try{
         let res = await axios.get(`https://api.github.com/users/${gitUserLogin}/repos`);
         setRepo(await res.data);
         console.log(res.data);
      }catch(e){
         console.log(e);
      }
   }, []);
   const getGitUserStarredRepos = useCallback(async () => {
      try{
         let res = await axios.get(`https://api.github.com/users/${gitUserLogin}/starred`);
         setStarred(await res.data);
         console.log(res.data);
      }catch(e){
         console.log(e);
      }
   }, []);

   
   useEffect(()=> {
      if (gitUser) {
         getGitUsersData();
         getGitUsersRepos();
         getGitUserStarredRepos()
       }
     }, []);

   const seeMoreRepos = () => {
      alert("see more repos");
      perPage += 4;
   }
   

   return (
   <Container flex className="git-user-personal-info-wraper">
      <Container className="git-user-personal-info" > 

         <Container flex className="git-user-personal-info-avatar" justify_content="center"> 
            <img src={user?.avatar_url} alt={user?.name} />
         </Container>

         <Container flex className="git-user-personal-info-name" justify_content="center"> 
            <h1>{user?.name}</h1>
         </Container>

         <Container flex className="git-user-personal-info-bio" justify_content="center"> 
            <h2>{user?.bio || "Descrption"}</h2>
         </Container>

      </Container>
       
       <Container> 

            <Tabs 
               repos={repo as unknown as [UserRepo]}
               starreds={starred as unknown as [UserRepo]}>
            </Tabs>
            
            <Container flex justify_content="center">
               <a onClick={()=> seeMoreRepos() }> ver mais </a>
            </Container>

       </Container>

       <Container> 
            
       </Container>

   </Container>
   )
}
export default GitUsersPage;


