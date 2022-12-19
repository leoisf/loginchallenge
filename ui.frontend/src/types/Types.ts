export type GitUser = {
    html_url: string;
    avatar_url: string;
    login: string;
    id: number;
    url: string;
    name: string;
    bio: string;
    repos_url: string;
  };

  export type UserRepo = {
    id: string
    name: string
    html_url: string
    isFavorite: boolean
    description: string
  };