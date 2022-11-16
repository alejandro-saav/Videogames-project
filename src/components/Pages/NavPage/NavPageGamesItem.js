import { useContext } from "react";
import GamesContext from "../../store/games-context";
import classes from "./NavPageGamesItem.module.css";
import nocover from "../../../img/nocover.png";

const RecentlyPageItem = (props) => {
  const formatedCover = `https:${props.cover.replace("t_thumb", "t_720p")}`;
  const nameFormated =
    props.name.length > 25 ? props.name.substring(0, 22) + "..." : props.name;
  const genreFormated =
    props.genre[0].name.length > 23
      ? props.genre[0].name.substring(0, 20) + "..."
      : props.genre[0].name;
  const scoreFormated = props.score ? props.score.toFixed(0) : "N/A";

  const gamesCtx = useContext(GamesContext);
  const companyValidate = props.company
    ? props.company[0].company.name
    : "No company found";

  const screenshotValidate = props.screenshot ? props.screenshot : nocover;

  const getDate = new Date(props.date * 1000);
  const formatDate = getDate.toLocaleDateString("en-GB");

  const itemOnClickHandler = (e) => {
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
  };
  return (
    <div className={classes.maincontainer} onClick={itemOnClickHandler}>
      <img
        className={classes.cover}
        src={formatedCover}
        width="100%"
        height="100%"
      />
      <div className={classes.details}>
        <div className={classes.title}>{nameFormated}</div>
        <div className={classes.genre}>{genreFormated}</div>
        <div className={classes.score}>
          {`${props.highlightedType} ${eval(props.highlighted)}`}
        </div>
      </div>
    </div>
  );
};
export default RecentlyPageItem;
