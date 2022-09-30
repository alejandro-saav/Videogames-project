import GamesContext from "../store/games-context";
import classes from "./MainHeader.module.css";
import NavOptions from "./NavOptions";
import Search from "./Search";
import SignIn from "./SignIn";
import { useContext, useState } from "react";
import menuOutline from "../../img/menu-outline.svg";
import closeOutline from "../../img/close.svg";

const MainHeader = () => {
  const context = useContext(GamesContext);
  const [navStyles, setNavStyles] = useState(true);
  console.log(context);
  const clickHandler = () => {
    context.setNewFuckingWindow(false);
  };

  const menuOnclickHandler = () => {
    setNavStyles((prev) => !prev);
  };
  //* ${classes.nav_open}
  return (
    <nav className={`${classes.navigation} ${navStyles && classes.nav_open}`}>
      <div className={classes.container}>
        <div className={classes.logocontainer}>
          <span onClick={clickHandler} className={classes.logo}>
            OACS
          </span>
          <img
            src={menuOutline}
            className={classes.iconmobilenav}
            name="menu-outline"
            onClick={menuOnclickHandler}
          />
        </div>
        <div className={`${classes.options} ${navStyles && classes.nav_open}`}>
          <NavOptions />
        </div>
        <div className={`${classes.search} ${navStyles && classes.nav_open}`}>
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
