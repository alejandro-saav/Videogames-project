import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import MainContent from "./components/MainContent";
import SecondContent from "./components/SecondContent";
import ReleasedGames from "./components/ReleasedGames";
import { useContext } from "react";
import GameDetails from "./components/ExternalPages/GameDetails";
import GamesContext from "./components/store/games-context";
import RecentylPage from "./components/ExternalPages/NavRecentPage/RecentlyPage";
import query from "./components/store/games-querys";
import Footer from "./components/Footer";

function App() {
  const gamesCtx = useContext(GamesContext);
  // const [externalPage, setExternalPage] = useState(false);
  let externalPageCondition = "";
  if (gamesCtx.newFuckingWindow === "recentlyreleased") {
    externalPageCondition = (
      <RecentylPage
        title={"Recently Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.recentGames}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "comingsoon") {
    externalPageCondition = (
      <RecentylPage
        title={"Incoming Games"}
        highlighted={"formatDate"}
        highlightedType={"Date:"}
        query={query.comingSoon}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "top100") {
    externalPageCondition = (
      <RecentylPage
        title={"Top 100 Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.top100}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "shooters") {
    externalPageCondition = (
      <RecentylPage
        title={"Best Shooter Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.shooters}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "platforms") {
    externalPageCondition = (
      <RecentylPage
        title={"Best Platforms Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.platformsGames}
      />
    );
  }

  if (gamesCtx.newFuckingWindow === "indies") {
    externalPageCondition = (
      <RecentylPage
        title={"Best Indies Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.indies}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "ps4") {
    externalPageCondition = (
      <RecentylPage
        title={"Best PS4 Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.ps4}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "xbox") {
    externalPageCondition = (
      <RecentylPage
        title={"Best Xbox One Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.xbox}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "pc") {
    externalPageCondition = (
      <RecentylPage
        title={"Best PC Games"}
        highlighted={"scoreFormated"}
        highlightedType={"Score:"}
        query={query.pc}
      />
    );
  }
  if (gamesCtx.newFuckingWindow === "nintendo") {
    externalPageCondition = (
      <RecentylPage
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
      {externalPageCondition === "" ? (
        <>
          <h2>Popular games right now!</h2>
          <div className="diu"></div>
          <MainContent games={gamesCtx.mainGames} />
          <h2>Recently Released!</h2>
          <div className="diu"></div>
          <MainContent games={gamesCtx.recentlyGames} />
          <h2>Last Platforms Releases!</h2>
          <div className="diu"></div>
          <SecondContent />
        </>
      ) : (
        externalPageCondition
        // <GameDetails />
      )}
      <Footer />
    </div>
  );
}

export default App;
