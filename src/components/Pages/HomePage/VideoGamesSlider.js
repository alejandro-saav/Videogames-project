import classes from "./VideoGamesSlider.module.css";
import SliderItem from "./SliderItem";
import { useContext, useState, useEffect } from "react";
import GamesContext from "../../store/games-context";
import LoadingCard from "./LoadingCard";

const MainContent = (props) => {
  const gamesCtx = useContext(GamesContext);
  const hasItem = gamesCtx.mainGames ? true : false;
  const [numberOfCards, setNumberOfCards] = useState(0);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  const [matchesB, setMatchesB] = useState(
    window.matchMedia("(max-width: 1020px)").matches
  );

  useEffect(() => {
    window.matchMedia("(max-width: 480px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
    window.matchMedia("(max-width: 1020px)").addEventListener("change", (e) => {
      setMatchesB(e.matches);
    });
  }, []);
  let cardsRender = 5;
  if (matchesB) {
    cardsRender = 3;
  }
  if (matches) {
    cardsRender = 1;
  }

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

  const fields = [...Array(cardsRender)];

  return (
    <>
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
          {hasItem
            ? props.games.map((item, index) => {
                if (
                  index < numberOfCards + cardsRender &&
                  index >= numberOfCards
                ) {
                  return (
                    <div className={classes.item} key={index}>
                      <SliderItem
                        title={item.name}
                        genre={item.genre}
                        cover={item.cover.replace("t_thumb", "t_720p")}
                        puntuacion={
                          item.review ? item.review?.toFixed(0) : "N/A"
                        }
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
                  );
                }
              })
            : fields.map((item, index) => {
                return (
                  <div className={classes.item} key={index}>
                    <LoadingCard />
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default MainContent;
