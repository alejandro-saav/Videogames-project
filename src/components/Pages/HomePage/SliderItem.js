import classes from "./SliderItem.module.css";
import { useContext } from "react";
import GamesContext from "../../store/games-context";
import nocover from "../../../img/nocover.png";
import { NavLink } from "react-router-dom";
const clienSecret = "9afgt7ltggsgv2f1zsgl1agn31q47e";
const clientId = "o8hd89dcqn6tvksmnse3kzec2we213";
const accesToken = "4wczrc1qwbmam0bejpj817cbvve3i7";
const seconds = "5614305";

const MainContentItem = (props) => {
  const titleMaxLength = 20;
  const gamesCtx = useContext(GamesContext);

  const companyValidate = props.company ? props.company : "No company found";

  const screenshotValidate = props.screenshot ? props.screenshot : nocover;

  const dateValidate = props.date ? props.date : "--/--/--";

  const itemOnClickHandler = (e) => {
    const game = {
      cover: props.cover,
      title: props.title,
      genre: props.genre,
      score: props.puntuacion,
      date: dateValidate,
      company: companyValidate,
      screenshot: screenshotValidate,
      video: props.video,
      summary: props.summary,
      platforms: props.platforms,
      similar_games: props.similar_games,
      game_modes: props.game_modes,
    };
    gamesCtx.setCurrentGames(game);
    gamesCtx.setNewFuckingWindow("gamedetails");
  };

  const titleValidation =
    props.title.length > titleMaxLength
      ? props.title.substring(0, titleMaxLength) + " ..."
      : props.title;

  const genreValidation =
    props.genre[0].name.length > titleMaxLength
      ? props.genre[0].name.substring(0, titleMaxLength + 10) + " ..."
      : props.genre[0].name;

  return (
    <NavLink
      to={`/game/${props.title.replaceAll(" ", "")}`}
      className={classes.itemcontainer}
      onClick={itemOnClickHandler}
    >
      <img src={props.cover} />
      <span className={classes.title}>{titleValidation}</span>
      <span className={classes.genre}>{genreValidation}</span>
      <div className={classes.puntuacion}>
        <span className={classes.texto}>Puntuacion: </span>
        <span className={classes.numero}>{props.puntuacion}</span>
      </div>
    </NavLink>
  );
};

export default MainContentItem;
