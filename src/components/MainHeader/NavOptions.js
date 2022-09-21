import classes from "./NavOptions.module.css";
import NavbarItem from "./NavbarItem";
import arrowsymbol from "../../img/down_arrow.svg";
import controllericon from "../../img/game_controller.svg";
import cubeicon from "../../img/cube.svg";
import laptopicon from "../../img/laptop.svg";

const NavOptions = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.dropdown}>
        <div className={classes.titlecontainer}>
          <img src={controllericon} className={classes.icon}></img>
          <a>Games</a>
          <img src={arrowsymbol} className={classes.arrow} />
        </div>
        <NavbarItem type="Games" />
      </li>
      <li className={classes.dropdown}>
        <div className={classes.titlecontainer}>
          <img src={cubeicon} className={classes.icon}></img>
          <a>Games Categories</a>
          <img src={arrowsymbol} className={classes.arrow} />
        </div>
        <NavbarItem type="Game Categories" />
      </li>
      <li className={classes.dropdown}>
        <div className={classes.titlecontainer}>
          <img src={laptopicon} className={classes.icon}></img>
          <a>Platforms</a>
          <img src={arrowsymbol} className={classes.arrow} />
        </div>
        <NavbarItem type="Platforms" />
      </li>
    </ul>
  );
};
export default NavOptions;
