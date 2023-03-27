import classes from "./Search.module.scss";
import searchIcon from "../../assets/search-icon.svg";

const Search = () => {
  return (
    <div className="flex flex-row">
      <input
        className="rounded-xl border-ourGrey border-solid border py-2 px-4 w-96"
        placeholder="Я ищу"
        name="search"
        id="search"
      />
      <img src={searchIcon} alt="search" className="relative right-10 " />
    </div>
  );
};

export default Search;
