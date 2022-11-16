import GamesContext from "../store/games-context";
import classes from "./MainHeader.module.css";
import NavOptions from "./NavOptions";
import Search from "./Search";
import SignIn from "./SignIn";
import { useContext } from "react";
import menuOutline from "../../img/menu-outline.svg";
import { NavLink } from "react-router-dom";
import closeOutline from "../../img/close.svg";

const MainHeader = () => {
  const context = useContext(GamesContext);
  // console.log(context);

  const menuOnclickHandler = () => {
    context.setNavMobState((prev) => !prev);
  };
  return (
    <nav
      className={`${classes.navigation} ${
        context.navMobState && classes.nav_open
      }`}
    >
      <div className={classes.container}>
        <div className={classes.logocontainer}>
          <NavLink to="/homepage" className={classes.logo}>
            OACS
          </NavLink>
          <img
            src={menuOutline}
            className={classes.iconmobilenav}
            name="menu-outline"
            onClick={menuOnclickHandler}
          />
        </div>
        <div
          className={`${classes.options} ${
            context.navMobState && classes.nav_open
          }`}
        >
          <NavOptions />
        </div>
        <div
          className={`${classes.search} ${
            context.navMobState && classes.nav_open
          }`}
        >
          <ul>
            <Search />
            <SignIn />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
