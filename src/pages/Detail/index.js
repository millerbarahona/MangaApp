import React, { useState, useEffect } from "react";
import SearchMangaById from "../../services/searchMangaById";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link, path, useRouter} from 'wouter'


export default function Detail({ params }) {
  const router = useRouter();
  router.lastTransition = { path: "..." };
  console.log(router.lastTransition = { path: "/Manga/:title" });
  const [manga, setManga] = useState([{},[]]);
  useEffect(function () {
    SearchMangaById({ mal_id: params.mal_id }).then((mangaRes) => {
      setManga(mangaRes)
    });
  },[]);

  return (
    <div>
      <Link to={`/Manga/`} ><ExitToAppIcon /></Link>
      <h1>{manga[0].mal_id}</h1>
      <hr/>
      <img src={manga[0].image_url} alt=""/>
      <hr/>
      <h1>{manga[0].title}</h1>
      <hr/>
      <h1>{manga[0].score}</h1>
      <hr/>
      <h1>Generos</h1>
      {manga[1].map((genero)=>(
          <div>
            <h1>{genero.name}</h1>
          </div>
      ))}
      <hr/>
      <p>{manga[0].synopsis}</p>
      
    </div>
  );
}
