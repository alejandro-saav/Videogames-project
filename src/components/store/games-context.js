import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const GamesContext = React.createContext({
  mainGames: [],
  recentlyGames: [],
  gamesByPlatform: [],
  newExternalWindow: false,
  newWindow: false,
  newFuckingWindow: "",
});

function getCurrentDateUnix() {
  const now = Date.now();
  const unixTime = Math.round(now / 1000);
  return unixTime.toString();
}

const fields = `fields name,genres.name,aggregated_rating,cover.url,involved_companies.company.name,videos.video_id,screenshots.url,first_release_date,summary,platforms.name,similar_games.name,similar_games.cover.url,similar_games.genres.name,game_modes.name;`;
const nullExcludeStr = `where name != null & genres.name != null & aggregated_rating != null & cover.url != null & videos.video_id != null & involved_companies.company.name != null`;
const newMainQuery = `query games "Main Games" {${fields}
    sort total_rating desc; ${nullExcludeStr} & first_release_date > 1654636672;limit 15;};`;

const recentHttpStr = `query games "Recentlys" {${fields} sort first_release_date desc; where first_release_date != null; ${nullExcludeStr} & first_release_date < ${getCurrentDateUnix()}; limit 15;};`;

const platformsHttpStr = `query games "PS4 Games" {${fields} sort first_release_date desc;
               ${nullExcludeStr} & first_release_date < 1660770765 & release_dates.platform = 48; limit 10;};
               query games "XBOX Games" {${fields} sort first_release_date desc;
               ${nullExcludeStr} & first_release_date < 1660770765 & release_dates.platform = 49; limit 10;};
               query games "PC Games" {${fields} sort first_release_date desc;
               ${nullExcludeStr} & first_release_date < 1660770765 & release_dates.platform = 6; limit 10;};
               query games "SWITCH Games" {${fields} sort first_release_date desc;
               ${nullExcludeStr} & first_release_date < 1660770765 & release_dates.platform = 130; limit 10;};`;

const bodyHttpStr = `${newMainQuery + recentHttpStr + platformsHttpStr}`;

const getGames = (data) => {
  const mainGamesList = [];
  const recentList = [];
  const platformList = [];
  // console.log(data);
  for (const item of data[0].result) {
    mainGamesList.push({
      name: item.name,
      genre: item.genres,
      review: item.aggregated_rating,
      cover: `https:${item.cover.url}`,
      date: item.first_release_date,
      company: item.involved_companies[0].company.name,
      screenshot: item.screenshots,
      video: item.videos[0].video_id,
      summary: item.summary,
      platforms: item.platforms,
      similar_games: item.similar_games,
      game_modes: item.game_modes,
    });
  }
  for (const item of data[1].result) {
    recentList.push({
      name: item.name,
      genre: item.genres,
      review: item.aggregated_rating,
      cover: `https:${item.cover.url}`,
      date: item.first_release_date,
      company: item.involved_companies[0].company.name,
      screenshot: item.screenshots,
      video: item.videos[0].video_id,
      summary: item.summary,
      platforms: item.platforms,
      similar_games: item.similar_games,
      game_modes: item.game_modes,
    });
  }

  platformList.push(
    { ps4: data[2].result },
    { xbox: data[3].result },
    { pc: data[4].result },
    { switch: data[5].result }
  );
  return [mainGamesList, recentList, platformList];
};

export const GamesContextProvider = (props) => {
  const [itemsList, setItemsList] = useState([]);
  const [currentGame, setCurrentGame] = useState([]);
  const { isLoading, error, sendRequest: fetchGames } = useFetch();
  const [navMobState, setNavMobState] = useState(false);
  useEffect(() => {
    // console.log("HI!  ");
    const getMain = (data) => {
      console.log(data);
      const gamesData = getGames(data);
      setItemsList((prev) => [...gamesData]);
    };
    fetchGames(
      {
        // url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/multiquery",
        url: "https://api.rawg.io/api/games?key=f9a75a49974649c7a1520b3e7fc70197",
        // url: "https://api.igdb.com/v4/multiquery",
        // url: "v4/multiquery",
        // url: "https://id.twitch.tv/oauth2/token?client_id=o8hd89dcqn6tvksmnse3kzec2we213&client_secret=dfezzmfofm10hi45zurquqrcig8m39&grant_type=client_credentials",
        // method: "POST",
        method: "GET",
        // body: bodyHttpStr,
      },
      getMain
    );
    // console.log(itemsList);
  }, []);

  const setCurrentGames = (game) => {
    setCurrentGame((prev) => [game]);
  };

  const contextValue = {
    mainGames: itemsList[0],
    recentlyGames: itemsList[1],
    gamesByPlatform: itemsList[2],
    isLoading,
    error,
    currentGame,
    setCurrentGames,
    navMobState,
    setNavMobState,
  };

  return (
    <GamesContext.Provider value={contextValue}>
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesContext;
