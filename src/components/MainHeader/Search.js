import classes from "./Search.module.css";
import searchicon from "../../img/search.svg";

const Search = () => {
  const searchChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={classes.search}>
      <input type="text" id="search" onChange={searchChangeHandler} />
      <button>
        <img src={searchicon} className={classes.icon} />
      </button>
    </div>
  );
};

export default Search;
