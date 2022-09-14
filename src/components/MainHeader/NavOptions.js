import classes from "./NavOptions.module.css";
import NavbarItem from "./NavbarItem";

const NavOptions = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.dropdown}>
        <a>Games</a>
        <NavbarItem type="Games" />
      </li>
      <li className={classes.dropdown}>
        <a>Games Categories</a>
        <NavbarItem type="Game Categories" />
      </li>
      <li className={classes.dropdown}>
        <a>Platforms</a>
        <NavbarItem type="Platforms" />
      </li>
    </ul>
  );
};
export default NavOptions;
