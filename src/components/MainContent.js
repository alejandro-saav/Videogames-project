import classes from "./MainContent.module.css";
import SliderContainer from "./SliderContainer";
import { motion } from "framer-motion";
import MainContentItem from "./MainContentItem";
import { useContext, useState, useEffect } from "react";
import GamesContext from "./store/games-context";

const MainContent = (props) => {
  const titleMaxLength = 20;
  // const [cardsRender, setCardsRender] = useState(5);
  const gamesCtx = useContext(GamesContext);
  const hasItem = gamesCtx.mainGames ? true : false;
  const [numberOfCards, setNumberOfCards] = useState(0);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );

  useEffect(() => {
    window.matchMedia("(max-width: 480px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, []);
  // console.log(matches);

  let cardsRender = matches ? 1 : 5;
  const clickRightHandler = () => {
    if (numberOfCards === 10) {
      return;
    }
    setNumberOfCards((prev) => prev + cardsRender);
  };

  const clickLeftHandler = () => {
    if (numberOfCards === 0) {
      return;
    }
    setNumberOfCards((prev) => prev - cardsRender);
  };

  return (
    <>
      {matches && <div>HOLA MUNDO</div>}
      {hasItem && (
        // <SliderContainer>
        <div className={classes.slider}>
          <span
            className={`${classes.rarrow} ${classes.arrow}`}
            onClick={clickRightHandler}
          >
            &#8250;
          </span>
          <span
            className={`${classes.larrow} ${classes.arrow}`}
            onClick={clickLeftHandler}
          >
            &#8249;
          </span>
          <div className={classes.container}>
            {props.games.map((item, index) => {
              if (
                index < numberOfCards + cardsRender &&
                index >= numberOfCards
              ) {
                return (
                  // <motion.div className={classes.item} key={index}>
                  <div className={classes.item} key={index}>
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
                  </div>
                  // </motion.div>
                );
              }
            })}
          </div>
        </div>
        /* </SliderContainer> */
      )}
    </>
  );
};

export default MainContent;
