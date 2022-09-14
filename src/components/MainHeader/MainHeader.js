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
    <nav>
      <div className={classes.container}>
        <div className={classes.options}>
          <span onClick={clickHandler}>OACS</span>
          <NavOptions />
        </div>
        <div className={classes.search}>
          <ul>
            <Search />
            <SignIn />
          </ul>
        </div>
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
