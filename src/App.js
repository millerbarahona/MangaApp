import Anime from "./pages/Anime/index";
import Manga from "./pages/Manga/index";
import Home from './pages/Home/index'
import { Link, Route } from "wouter";
import SearchResults from './pages/SearchResults'
import SearchMangas from './pages/SearchResults/manga'
import Detail from './pages/Detail'

function App() {
  return (
    <div>
      <Route component={Home} path="/"/>
      <Route component={Anime} path="/Anime" />
      <Route component={Manga} path="/Manga" />
      <Route component={SearchResults} path="/Anime/:title" />
      <Route component={SearchMangas} path="/Manga/:title" />
      <Route component={Detail} path="/Manga/:mal_id/:title"/>

    </div>
  );
}

export default App;
