import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import GamesContext from "../store/games-context";
import classes from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  const listType = props.type;
  const gamesCtx = useContext(GamesContext);
  const clickListener = (e) => {
    const value = e.target.innerText.replace(/\s+/g, "").toLowerCase();
    console.log(value);
    gamesCtx.setNewFuckingWindow(value);
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
            {navOptions.games.map((item) => {
              return (
                <li onClick={clickListener}>
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        );
        break;
      case "Game Categories":
        return (
          <ul className={`${classes.list} ${classes.secondlist}`}>
            {navOptions.gameCategories.map((item) => {
              return (
                <li onClick={clickListener}>
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        );
        break;
      case "Platforms":
        return (
          <ul className={`${classes.list} ${classes.lastlist}`}>
            {navOptions.platforms.map((item) => {
              return (
                <li onClick={clickListener}>
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        );
        break;
    }
  };
  // const renderSwitch = () => {
  //   switch (listType) {
  //     case "Games":
  //       return (
  //         <ul className={`${classes.list} ${classes.firstlist}`}>
  //           <li onClick={clickListener}>
  //             <a>Recently Released</a>
  //           </li>
  //           <li onClick={clickListenerI}>
  //             <a>Coming Soon</a>
  //           </li>
  //           <li>
  //             <a>Top 100</a>
  //           </li>
  //           <li>
  //             <a>Reviews</a>
  //           </li>
  //         </ul>
  //       );
  //       break;
  //     case "Game Categories":
  //       return (
  //         <ul className={`${classes.list} ${classes.secondlist}`}>
  //           <li>
  //             <a>Shooters</a>
  //           </li>
  //           <li>
  //             <a>MMO</a>
  //           </li>
  //           <li>
  //             <a>Battle Royale</a>
  //           </li>
  //           <li>
  //             <a>Indies</a>
  //           </li>
  //         </ul>
  //       );
  //       break;
  //     case "Platforms":
  //       return (
  //         <ul className={`${classes.list} ${classes.lastlist}`}>
  //           <li>
  //             <a>PS4</a>
  //           </li>
  //           <li>
  //             <a>Xbox</a>
  //           </li>
  //           <li>
  //             <a>PC</a>
  //           </li>
  //           <li>
  //             <a>Nintendo</a>
  //           </li>
  //         </ul>
  //       );
  //       break;
  //   }
  // };
  return <>{renderSwitch()}</>;
};

export default NavbarItem;
