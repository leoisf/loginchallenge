import React from "react";

import Avatar from "../Avatar/Avatar";

export type User = {
  html_url: string;
  avatar_url: string;
  login: string;
  id: number;
};

type Props = {
  user: User;
};

const UserCard: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <a
      className=""
      target="_blank"
      rel="noopener noreferrer"
      href={user.html_url}
    >
      <Avatar avatar={user.avatar_url} alt={user.login} />
      <div className="">
        <div
          className=""
        >
          {user.login}
        </div>
      </div>
    </a>
  );
};

export default UserCard;