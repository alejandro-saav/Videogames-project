import classes from "./SummaryContent.module.css";
import { useContext } from "react";
import GamesContext from "../../store/games-context";
import nocover from "../../../img/nocover.png";
const SummaryContent = () => {
  const gamesCtx = useContext(GamesContext);
  const hasGameModes = gamesCtx.currentGame[0].game_modes ? (
    gamesCtx.currentGame[0].game_modes.map((item, index) => {
      return <a key={index}>{item.name}</a>;
    })
  ) : (
    <span>No games modes found :(</span>
  );

  const hasSimilarGames = gamesCtx.currentGame[0].similar_games ? (
    gamesCtx.currentGame[0].similar_games.map((item, index) => {
      // console.log(item);
      const hasCover = item.hasOwnProperty("cover")
        ? `https:${item.cover.url.replace("t_thumb", "t_720p")}`
        : nocover;
      if (index < 5) {
        return (
          <div className={classes.relateditem} key={index}>
            <img className={classes.cover} src={hasCover} />
            <span>{`${item.name}`}</span>
          </div>
        );
      }
    })
  ) : (
    <span>No similar games found :(</span>
  );
  return (
    <div className={classes.container}>
      <div className={classes.maincontainer}>
        <div className={classes.genres}>
          <span>Genres: </span>
          {gamesCtx.currentGame[0].genre.map((item, index) => {
            return (
              <a href="#" className={classes.genreslinks} key={index}>
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
        <div className={classes.platforms}>
          <span>Paltforms: </span>
          {gamesCtx.currentGame[0].platforms.map((item, index) => {
            return (
              <>
                <a key={index} href="#">
                  <span>{item.name}</span>
                </a>
              </>
            );
          })}
        </div>
        <div className={classes.storyline}>
          <span>Storyline: </span>
          <p>{gamesCtx.currentGame[0].summary}</p>
        </div>
      </div>
      <div className={classes.rightcontent}>
        <div className={classes.gamemodes}>
          <span>Game Modes</span>
          {hasGameModes}
        </div>
        <div className={classes.related}>
          <span className={classes.relatedtitle}>Related Games</span>
          <div className={classes.relatedlist}>{hasSimilarGames}</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContent;
