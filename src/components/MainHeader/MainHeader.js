import GamesContext from "../store/games-context";
import classes from "./MainHeader.module.css";
import NavOptions from "./NavOptions";
import Search from "./Search";
import SignIn from "./SignIn";
import { useContext } from "react";
import menuOutline from "../../img/menu-outline.svg";
import closeOutline from "../../img/close.svg";

const MainHeader = () => {
  const context = useContext(GamesContext);
  console.log(context);
  const clickHandler = () => {
    context.setNewFuckingWindow("");
  };
  return (
    <nav className={`${classes.navigation} ${classes.nav_open}`}>
      <div className={classes.container}>
        <span onClick={clickHandler}>OACS</span>
        <div className={classes.options}>
          <NavOptions />
        </div>
        <div className={classes.search}>
          <ul>
            <Search />
            <SignIn />
          </ul>
        </div>
        {/* <nav className={`${classes.main_nav} ${classes.nav_open}`}>
          <ul className={classes.main_nav_list}>
            <li>
              <a className={classes.main_nav_link} href="#">
                Games
              </a>
            </li>
            <li>
              <a className={classes.main_nav_link} href="#">
                Games Categories
              </a>
            </li>
            <li>
              <a className={classes.main_nav_link} href="#">
                Platforms
              </a>
            </li>
            <li>
              <a className={classes.main_nav_link} href="#">
                Search
              </a>
            </li>
            <li>
              <a className={classes.main_nav_link} href="#">
                Sign In
              </a>
            </li>
          </ul>
        </nav> */}
        <div className={classes.btnmobilenav}>
          {/* <ion-icon
            className="icon-mobile-nav"
            name="reorder-three-outline"
          ></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon> */}
          <img
            src={menuOutline}
            className={classes.iconmobilenav}
            name="menu-outline"
          />
          <img
            src={closeOutline}
            className={classes.iconmobilenav}
            name="close-outline"
          />
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
