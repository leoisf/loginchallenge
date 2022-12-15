import React, { useCallback, useEffect, useState } from "react";

import Avatar from "../Avatar/Avatar";
import { Container } from "../Container/Container";
import {GitUser, GitUserInfo} from "../../types/Types"
import axios from 'axios';
import Button from "../Button/Button";


export interface UserCardProps {
  users: GitUser;
}

const UserCard = ({
  users
}: UserCardProps ): JSX.Element => { 

  const [usersInfo, setusersInfo] = useState({} as GitUserInfo);

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
     users && getGitUsersInfo(users);      
  }, []);

  return (
    <Container className="git-users-search-card">
      <Container flex>
          <Avatar avatar={users.avatar_url} alt={users.login} />
          <Container className="git-users-search-card-info">
            <Container className="git-users-search-card-info-name">{usersInfo.name}</Container>
            <Container className="git-users-search-card-info-description">{usersInfo.bio}</Container>
          </Container>
      </Container>
      <Container flex justify_content="right">
          <Button size="small" label="Ver mais" type="button"> </Button>
      </Container>
  </Container>
  )
}

export default UserCard;