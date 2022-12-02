import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { Container } from "../Container/Container";
import Input from "../Input/Input";
import { Button } from '../Button/Button';
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";

export interface GitUsersSearchProps {
   
}
export type User = {
   html_url: string;
   avatar_url: string;
   login: string;
   id: number;
 };
 

 const GitUsersSearch = ({

 }: GitUsersSearchProps ): JSX.Element => { 

   const [searchTerm, setSearchTerm] = useState("");
   const [users, setUsers] = useState([]);

   const getGitUsersSearch = useCallback(async () => {
      try{
         let res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
         setUsers(await res.data.items);
      }catch(e){
         console.log(e);
      }finally{
         console.log('fechou!!!');
      }
      
   }, [searchTerm]);

   useEffect(()=> {
      if (searchTerm) {
         getGitUsersSearch();
       }
     }, [searchTerm, getGitUsersSearch]);

     const handleSearch = (term: string) => {
      setSearchTerm(term);
    };

   return (<>
      <SearchBar onFormSubmit={handleSearch} />
      <Container> 
         <div className="">
               {users?.map((user: User) => {
                  return <UserCard key={user.id} user={user} />;
               })}
            </div>
         </Container>
      </>
   )
}
export default GitUsersSearch;


