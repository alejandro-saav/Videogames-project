import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import HomePage from "./components/Pages/HomePage/HomePage";
import GameDetails from "./components/Pages/GamesDetailsPage/GameDetails";
import NavPage from "./components/Pages/NavPage/NavPage";
import query from "./components/store/games-querys";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
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
          path="/category/MMO"
          element={
            <NavPage
              title={"Best MMORPG Games"}
              highlighted={"scoreFormated"}
              highlightedType={"Score:"}
              query={query.mmo}
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
