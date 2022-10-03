import { useEffect } from "react";
import classes from "./FilterOptions.module.css";
const FilterPage = (props) => {
  const getSortValue = (e) => {
    console.log(e.target.name);
    props.filterHandler(`& ${e.target.name}.name = "${e.target.value}"`);
  };
  useEffect(() => {
    console.log("YO");
  }, [props.resetPag]);
  return (
    <div className={classes.maincontainer}>
      <div className={classes.platformtitle}>Filter by platforms</div>
      <select
        name="platforms"
        className={classes.platforms}
        onChange={getSortValue}
      >
        <option value="default" selected disabled>
          --Platforms--
        </option>
        <option value="PlayStation 4">PS4</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="PC (Microsoft Windows)">PC</option>
      </select>
      <div className={classes.genretitle}>Filter by genre</div>
      <select name="genres" className={classes.genres} onChange={getSortValue}>
        <option value="default" selected disabled>
          --Genres--
        </option>
        <option value="Shooter">Shooter</option>
        <option value="Role-playing (RPG)">Role-playing (RPG)</option>
        <option value="Platform">Platforms</option>
        <option value="Fighting">Fighting</option>
        <option value="Strategy">Strategy</option>
        <option value="Adventure">Adventure</option>
      </select>
    </div>
  );
};

export default FilterPage;
