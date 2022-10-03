import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import HomePage from "./components/Pages/HomePage/HomePage";
import VideoGamesSlider from "./components/Pages/HomePage/VideoGamesSlider";
import ConsolesLists from "./components/Pages/HomePage/ConsolesLists";
import { useContext } from "react";
import GameDetails from "./components/Pages/GamesDetailsPage/GameDetails";
import GamesContext from "./components/store/games-context";
import NavPage from "./components/Pages/NavPage/NavPage";
import query from "./components/store/games-querys";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const gamesCtx = useContext(GamesContext);
  let externalPageCondition = "";
  if (gamesCtx.newFuckingWindow === "recentlyreleased") {
    externalPageCondition = (
      <NavPage
        title={"Recently Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.recentGames}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "comingsoon") {
    externalPageCondition = (
      <NavPage
        title={"Incoming Games"}
        highlighted={"formatDate"}
        highlightedType={"Date:"}
        query={query.comingSoon}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "top100") {
    externalPageCondition = (
      <NavPage
        title={"Top 100 Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.top100}
      />
    );
  }

  if (gamesCtx.newFuckingWindow === "mosthypedgames") {
    externalPageCondition = (
      <NavPage
        title={"Most Hyped Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.coopMultiplayer}
      />
    );
  }

  if (gamesCtx.newFuckingWindow === "shooters") {
    externalPageCondition = (
      <NavPage
        title={"Best Shooter Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.shooters}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "platforms") {
    externalPageCondition = (
      <NavPage
        title={"Best Platforms Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.platformsGames}
      />
    );
  }

  if (gamesCtx.newFuckingWindow === "indies") {
    externalPageCondition = (
      <NavPage
        title={"Best Indies Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.indies}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "ps4") {
    externalPageCondition = (
      <NavPage
        title={"Best PS4 Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.ps4}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "xbox") {
    externalPageCondition = (
      <NavPage
        title={"Best Xbox One Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.xbox}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "pc") {
    externalPageCondition = (
      <NavPage
        title={"Best PC Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.pc}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "nintendo") {
    externalPageCondition = (
      <NavPage
        title={"Best Nintendo Switch Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.nintendo}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "gamedetails") {
    externalPageCondition = <GameDetails />;
  }
  return (
    <div className="App">
      <header>
        <MainHeader />
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/game/:productId" element={<GameDetails />} />
        <Route
          path="/category/RecentlyReleased"
          element={
            <NavPage
              title={"RecentlyGames"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.recentGames}
            />
          }
        />
        <Route
          path="/category/ComingSoon"
          element={
            <NavPage
              title={"Incoming Games"}
              highlighted={"formatDate"}
              highlightedType={"Date:"}
              query={query.comingSoon}
            />
          }
        />
        <Route
          path="/category/Top100"
          element={
            <NavPage
              title={"Top 100 Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.top100}
            />
          }
        />
        <Route
          path="/category/MostHypedGames"
          element={
            <NavPage
              title={"Most Hyped Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.coopMultiplayer}
            />
          }
        />
        <Route
          path="/category/Shooters"
          element={
            <NavPage
              title={"Best Shooter Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.shooters}
            />
          }
        />
        <Route
          path="/category/Platforms"
          element={
            <NavPage
              title={"Best Platforms Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.platformsGames}
            />
          }
        />
        <Route
          path="/category/Indies"
          element={
            <NavPage
              title={"Best Indies Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.indies}
            />
          }
        />
        <Route
          path="/category/PS4"
          element={
            <NavPage
              title={"Best PS4 Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.ps4}
            />
          }
        />
        <Route
          path="/category/Xbox"
          element={
            <NavPage
              title={"Best Xbox One Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.xbox}
            />
          }
        />
        <Route
          path="/category/PC"
          element={
            <NavPage
              title={"Best PC Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.pc}
            />
          }
        />
        <Route
          path="/category/Nintendo"
          element={
            <NavPage
              title={"Best Nintendo Switch Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.nintendo}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
