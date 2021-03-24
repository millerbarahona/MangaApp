import Anime from "./pages/Anime/index";
import Manga from "./pages/Manga/index";
import Home from './pages/Home/index'
import { Button } from "@material-ui/core";
import { Link, Route } from "wouter";
import SearchResults from './pages/SearchResults'
import SearchMangas from './pages/SearchResults/manga'
function App() {
  return (
    <div>
      <Route component={Home} path="/"/>
      <Route component={Anime} path="/Anime" />
      <Route component={Manga} path="/Manga" />
      <Route component={SearchResults} path="/Anime/:title" />
      <Route component={SearchMangas} path="/Manga/:title" />
    </div>
  );
}

export default App;
