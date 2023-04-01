import classes from "./Search.module.scss";
import searchIcon from "../../assets/search-icon.svg";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  const iiiip = useEffect(() => {
    // render();
  }, [searchParams]);
  return (
    <div className="flex flex-row">
      <input
        className="rounded-xl border-ourGrey border-solid border py-2 px-4 w-96"
        placeholder="Я ищу"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src={searchIcon} alt="search" className="relative right-10 " />
    </div>
  );
};

export default Search;
