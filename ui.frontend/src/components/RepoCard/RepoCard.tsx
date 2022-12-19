import React, { useCallback, useEffect, useState } from "react";

import Avatar from "../Avatar/Avatar";
import { Container } from "../Container/Container";
import {GitUser} from "../../types/Types"
import axios from 'axios';
import Button from "../Button/Button";


export interface UserCardProps {
  user: GitUser;
}

const UserCard = ({
  user
}: UserCardProps ): JSX.Element => { 

  const [usersInfo, setusersInfo] = useState({}as GitUser);

  const getGitUsersInfo = useCallback(async (user: GitUser) => {
     try{
        let res = await axios.get(user.url);
        setusersInfo(await res.data);
        console.log(res.data);
     }catch(e){
        console.log(e);
     }
  }, []);

  useEffect(()=> {
     user && getGitUsersInfo(user);      
  }, []);

  const handleMoreInfo = () => {
    alert("handleMoreInfo");
  
  }

  return (
    <Container className="git-users-search-card">
      <Container flex>
          <Avatar avatar={user.avatar_url} alt={user.login} />
          <Container className="git-users-search-card-info">
            <Container className="git-users-search-card-info-name">{usersInfo.name}</Container>
            <Container className="git-users-search-card-info-description">{usersInfo.bio || "Description" }</Container>
          </Container>
      </Container>
      <Container flex justify_content="right">
          <Button size="small" label="Ver mais" type="button" onClick={()=>handleMoreInfo()}> </Button>
      </Container>
  </Container>
  )
}

export default UserCard;