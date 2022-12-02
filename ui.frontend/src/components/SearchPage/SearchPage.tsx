import React, { useState, useEffect } from "react"
import GitUsersSearch from "../GitUsersSearch/GitUsersSearch";

type SearchPageProps = {
   children: React.ReactNode;
 };

 const SearchPage = ({
 }: SearchPageProps): JSX.Element =>{
  return (
    <>
    <GitUsersSearch> </GitUsersSearch>
    </>
  );
};
export default SearchPage;