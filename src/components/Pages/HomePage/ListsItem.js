import classes from "./ListsItem.module.css";
import { useContext } from "react";
import GamesContext from "../../store/games-context";
import nocover from "../../../img/nocover.png";
import { NavLink } from "react-router-dom";

const ConsoleReleasedItem = (props) => {
  const gamesCtx = useContext(GamesContext);
  const formatedCover = `https:${props.cover.replace("t_thumb", "t_720p")}`;
  const nameFormated =
    props.name.length > 26 ? props.name.substring(0, 23) + "..." : props.name;

  const genreFormated =
    props.genre[0].name.length > 23
      ? props.genre[0].name.substring(0, 20) + "..."
      : props.genre[0].name;

  const scoreFormated = props.score ? props.score.toFixed(0) : "N/A";

  const companyValidate = props.company ? props.company : "No company found";

  const screenshotValidate = props.screenshot ? props.screenshot : nocover;

  const itemOnClickHandler = () => {
    const game = {
      cover: formatedCover,
      title: props.name,
      genre: props.genre,
      score: scoreFormated,
      date: props.date,
      company: companyValidate,
      screenshot: screenshotValidate,
      video: props.video,
      summary: props.summary,
      platforms: props.platforms,
      similar_games: props.similar_games,
      game_modes: props.game_modes,
    };
    gamesCtx.setCurrentGames(game);
    localStorage.setItem("game", JSON.stringify(game));
  };
  return (
    <NavLink
      to={`/game/${props.name.replaceAll(" ", "")}`}
      className={classes.itemcontainer}
      onClick={itemOnClickHandler}
    >
      <img className={classes.img} src={formatedCover} />
      <span className={classes.title}>{nameFormated}</span>
      <span className={classes.genre}>{genreFormated}</span>
    </NavLink>
  );
};

export default ConsoleReleasedItem;
