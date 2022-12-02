import React, { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

type SearchBarProps = {
  onFormSubmit: (searchTerm: string) => void;
};

const SearchBar = ({ onFormSubmit }:SearchBarProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <div>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(event)
          }
          value={searchTerm}
          placeholder="Search for GitHub user"
        />
      </div>
      <div
      >
        <Button  primary label="search" type="submit">
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
