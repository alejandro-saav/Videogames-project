import GamesContext from "../../store/games-context";
import classes from "./GameDetails.module.css";
import { useContext, useEffect } from "react";
import SummaryContent from "./SummaryContent";

const GameDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const gamesCtx = useContext(GamesContext);
  const getDate = new Date(gamesCtx.currentGame[0].date * 1000);
  const formatDate = getDate.toLocaleDateString("en-GB");
  const screenshotIsArray =
    typeof gamesCtx.currentGame[0].screenshot === "object";
  const formatedScreenshot = screenshotIsArray
    ? `https:${gamesCtx.currentGame[0].screenshot[0].url?.replace(
        "t_thumb",
        "t_720p"
      )}`
    : gamesCtx.currentGame[0].screenshot;
  const formatedScreenshotTwo =
    screenshotIsArray && gamesCtx.currentGame[0].screenshot.length > 1
      ? `https:${gamesCtx.currentGame[0].screenshot[1].url.replace(
          "t_thumb",
          "t_720p"
        )}`
      : formatedScreenshot;
  // console.log(formatedScreenshotTwo);
  // console.log(Math.random());
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>{gamesCtx.currentGame[0].title}</h3>
        </div>
        <div className={classes.details}>
          <div className={classes.puntuacioncontainer}>
            <span className={classes.subtitle}>Puntuacion</span>
            <span className={classes.puntuacion}>
              {gamesCtx.currentGame[0].score}
            </span>
          </div>
          <div className={classes.developers}>
            <span className={classes.subtitle}>Desarrolladores</span>
            <span className={classes.desarrollador}>
              {gamesCtx.currentGame[0].company}
            </span>
          </div>
          <div className={classes.fecha}>
            <span className={classes.subtitle}>Fecha de Lanzamiento:</span>
            <span className={classes.date}>{formatDate}</span>
          </div>
        </div>
      </div>
      <div className={classes.contentcontainer}>
        <div className={classes.covercontainer}>
          <img src={gamesCtx.currentGame[0].cover} />
        </div>
        <div className={classes.videocontainer}>
          <iframe
            height="100%"
            width="100%"
            src={`https://youtube.com/embed/${gamesCtx.currentGame[0].video}?rel=0`}
          ></iframe>
        </div>
        <div className={classes.thirdcontainer}>
          <img src={formatedScreenshot} height="100%" />
        </div>
        <div className={classes.fourthcontainer}>
          <img src={formatedScreenshotTwo} height="100%" />
        </div>
      </div>
      <>
        <SummaryContent />
      </>
    </>
  );
};

export default GameDetails;
