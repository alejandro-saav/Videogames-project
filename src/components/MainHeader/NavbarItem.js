import { useContext } from "react";
import GamesContext from "../store/games-context";
import classes from "./NavbarItem.module.css";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  const listType = props.type;
  const gamesCtx = useContext(GamesContext);
  const clickListener = (e) => {
    const value = e.target.innerText.replace(/\s+/g, "").toLowerCase();
    console.log(value);
    gamesCtx.setNavMobState((prev) => !prev);
  };
  const navOptions = {
    games: ["Recently Released", "Coming Soon", "Top 100", "Most Hyped Games"],
    gameCategories: ["Shooters", "MMO", "Platforms", "Indies"],
    platforms: ["PS4", "Xbox", "PC", "Nintendo"],
  };
  const renderSwitch = () => {
    switch (listType) {
      case "Games":
        return (
          <ul className={`${classes.list} ${classes.firstlist}`}>
            {navOptions.games.map((item, index) => {
              return (
                <li onClick={clickListener} key={index}>
                  <NavLink
                    to={`/category/${item.replaceAll(" ", "")}`}
                    className={classes.link}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        );
        break;
      case "Game Categories":
        return (
          <ul className={`${classes.list} ${classes.secondlist}`}>
            {navOptions.gameCategories.map((item, index) => {
              return (
                <li onClick={clickListener} key={index}>
                  <NavLink
                    to={`/category/${item.replaceAll(" ", "")}`}
                    className={classes.link}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        );
        break;
      case "Platforms":
        return (
          <ul className={`${classes.list} ${classes.lastlist}`}>
            {navOptions.platforms.map((item, index) => {
              return (
                <li onClick={clickListener} key={index}>
                  <NavLink
                    to={`/category/${item.replaceAll(" ", "")}`}
                    className={classes.link}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        );
        break;
    }
  };
  return <>{renderSwitch()}</>;
};

export default NavbarItem;
