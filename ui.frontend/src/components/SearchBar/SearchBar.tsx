import React, { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Container } from '../Container/Container';

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
    <Container flex className="search-page-search-bar">
      <form onSubmit={(event) => handleFormSubmit(event)} >
        <Input onChange={(          
            event: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(event)
          }
          value={searchTerm}
          placeholder="Ex.:Thauany"
        />
        <Button primary label="Buscar" type="submit"> </Button>
    </form>
    </Container>
  );
};

export default SearchBar;
