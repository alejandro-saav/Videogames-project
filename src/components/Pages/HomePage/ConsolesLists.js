import ListsItem from "./ListsItem";
import classes from "./ConsolesLists.module.css";
import GamesContext from "../../store/games-context";
import { useState, useContext } from "react";
import LoadingCard from "./LoadingCard";

const SecondContent = () => {
  const [currentColumn, setCurrentColumn] = useState(1);

  const clickLeftHandler = (e) => {
    if (currentColumn === 1) {
      return;
    }
    setCurrentColumn((prev) => prev - 1);
  };

  const clickRightHandler = (e) => {
    if (currentColumn === 4) {
      return;
    }
    setCurrentColumn((prev) => prev + 1);
  };

  const renderItem = (gamesData) => {
    return gamesData.map((item, index) => {
      return (
        <ListsItem
          key={index}
          name={item.name}
          cover={item.cover.url}
          genre={item.genres}
          score={item.aggregated_rating}
          date={item.first_release_date}
          company={item.involved_companies[0].company.name}
          screenshot={item.screenshots}
          video={item.videos[0].video_id}
          summary={item.summary}
          platforms={item.platforms}
          similar_games={item.similar_games}
          game_modes={item.game_modes}
        />
      );
    });
  };
  const fields = [...Array(1)];
  const gamesCtx = useContext(GamesContext);
  const hasItem = gamesCtx.gamesByPlatform ? true : false;
  return (
    <>
      <div className={classes.maincontainer}>
        <span
          className={`${classes.rarrow} ${classes.arrow}`}
          onClick={clickRightHandler}
        >
          &#8250;
        </span>
        <span
          className={`${classes.larrow} ${classes.arrow}`}
          id={currentColumn}
          onClick={clickLeftHandler}
        >
          &#8249;
        </span>
        <div
          className={`${classes.first_column} ${
            currentColumn === 1 ? classes.active : ""
          }`}
        >
          <h3>PS4</h3>
          {hasItem
            ? renderItem(gamesCtx.gamesByPlatform[0].ps4)
            : fields.map((item) => {
                return <LoadingCard />;
              })}
        </div>
        <div
          className={`${classes.second_column} ${
            currentColumn === 2 ? classes.active : ""
          }`}
        >
          <h3>XBOX</h3>
          {hasItem
            ? renderItem(gamesCtx.gamesByPlatform[1].xbox)
            : fields.map((item) => {
                return <LoadingCard />;
              })}
        </div>
        <div
          className={`${classes.third_column} ${
            currentColumn === 3 ? classes.active : ""
          }`}
        >
          <h3>PC</h3>
          {hasItem
            ? renderItem(gamesCtx.gamesByPlatform[2].pc)
            : fields.map((item) => {
                return <LoadingCard />;
              })}
        </div>
        <div
          className={`${classes.fourth_column} ${
            currentColumn === 4 ? classes.active : ""
          }`}
        >
          <h3>NINTENDO SWITCH</h3>
          {hasItem
            ? renderItem(gamesCtx.gamesByPlatform[3].switch)
            : fields.map((item) => {
                return <LoadingCard />;
              })}
        </div>
      </div>
    </>
  );
};

export default SecondContent;
