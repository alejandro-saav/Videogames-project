import ConsoleReleasedItem from "./ConsoleReleasedItem";
import classes from "./SecondContent.module.css";
import GamesContext from "./store/games-context";
import { useEffect, useState, useContext } from "react";

const SecondContent = () => {
  const titleMaxLength = 20;
  const renderItem = (gamesData) => {
    return gamesData.map((item, index) => {
      return (
        <ConsoleReleasedItem
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
  const gamesCtx = useContext(GamesContext);
  const hasItem = gamesCtx.gamesByPlatform ? true : false;
  return (
    <>
      {hasItem ? (
        <div className={classes.maincontainer}>
          <div className={classes.itemcontainer}>
            <h3>PS4</h3>
            {renderItem(gamesCtx.gamesByPlatform[0].ps4)}
          </div>
          <div className={classes.itemcontainer}>
            <h3>XBOX</h3>
            {renderItem(gamesCtx.gamesByPlatform[1].xbox)}
          </div>
          <div className={classes.itemcontainer}>
            <h3>PC</h3>
            {renderItem(gamesCtx.gamesByPlatform[2].pc)}
          </div>
          <div className={classes.itemcontainer}>
            <h3>NINTENDO SWITCH</h3>
            {renderItem(gamesCtx.gamesByPlatform[3].switch)}
          </div>
        </div>
      ) : (
        <div>CARGANDO</div>
      )}
    </>
  );
};

export default SecondContent;
