import React from "react";
import { Container } from "../Container/Container";

type Props = {
  avatar: string;
  alt: string;
};

const Avatar: React.FunctionComponent<Props> = ({ avatar, alt }) => {
  return (
    <Container flex className="git-users-search-card-img"> 
      <img src={avatar} alt={alt} width="93" height="93"/>
    </Container>
  );
};

export default Avatar;
