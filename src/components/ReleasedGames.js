import classes from "./MainContent.module.css";
import SliderContainer from "./SliderContainer";
import { motion } from "framer-motion";
import MainContentItem from "./MainContentItem";
import GamesContext from "./store/games-context";
import { useContext } from "react";
const ReleasedGames = () => {
  const titleMaxLength = 20;
  const gamesCtx = useContext(GamesContext);
  const hasItem = gamesCtx.recentlyGames ? true : false;
  return (
    <>
      {hasItem && (
        <SliderContainer>
          {gamesCtx.recentlyGames.map((item, index) => {
            return (
              <motion.div className={classes.item} key={index}>
                <MainContentItem
                  title={item.name}
                  genre={item.genre}
                  cover={item.cover.replace("t_thumb", "t_720p")}
                  puntuacion={item.review ? item.review?.toFixed(0) : "N/A"}
                  date={item.date}
                  company={item.company}
                  screenshot={item.screenshot}
                  video={item.video}
                  summary={item.summary}
                  platforms={item.platforms}
                  similar_games={item.similar_games}
                  game_modes={item.game_modes}
                />
              </motion.div>
            );
          })}
        </SliderContainer>
      )}
    </>
  );
};

export default ReleasedGames;
