import classes from "./HomePage.module.css";
import { useContext } from "react";
import GamesContext from "../../store/games-context";
import VideoGamesSlider from "./VideoGamesSlider";
import ConsolesLists from "./ConsolesLists";

const HomePage = () => {
  const gamesCtx = useContext(GamesContext);
  return (
    <>
      <h2>Popular games right now!</h2>
      <div className={classes.diu}></div>
      <VideoGamesSlider games={gamesCtx.mainGames} />
      <h2>Recently Released!</h2>
      <div className={classes.diu}></div>
      <VideoGamesSlider games={gamesCtx.recentlyGames} />
      <h2>Last Platforms Releases!</h2>
      <div className={classes.diu}></div>
      <ConsolesLists />
    </>
  );
};

export default HomePage;
