import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { Container } from "../Container/Container";
import Input from "../Input/Input";
import { Button } from '../Button/Button';
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import { GitUser } from "../../types/Types";

export interface GitUsersSearchProps {
   children: React.ReactNode;
   className?: string;
}

 const GitUsersSearch = ({

 }: GitUsersSearchProps ): JSX.Element => { 

   const [searchTerm, setSearchTerm] = useState("");
   const [users, setUsers] = useState([]);


   const getGitUsersSearch = useCallback(async () => {
      try{
         let perPage = 3;
         let res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&per_page=${perPage}`);
         setUsers(await res.data.items);
         console.log(res.data.items);
      }catch(e){
         console.log(e);
      }finally{
         console.log('fechou!!!');
      }
      
   }, [searchTerm]);


   useEffect(()=> {
      searchTerm && getGitUsersSearch();
     }, [searchTerm, getGitUsersSearch]);

     const handleSearch = (term: string) => {
      setSearchTerm(term);
    };

   return (
   <Container className="git-users-search-conteiner" >
      <SearchBar onFormSubmit={handleSearch} />
         <Container  className="git-users-search-content" >
            {users?.map((user: GitUser) => {
               return <UserCard key={user.id} users={user} />;
            })}
         </Container>
      </Container>
   )
}
export default GitUsersSearch;


