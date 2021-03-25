import React, { useState, useEffect } from "react";
import SearchMangaById from "../../services/searchMangaById";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link, useHistory, useParams} from 'react-router-dom'


export default function Detail({ params }) {
  const [manga, setManga] = useState([{},[]]);
  const mal_id= useParams().mal_id

  useEffect(function () {
    SearchMangaById({ mal_id: mal_id }).then((mangaRes) => {
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
      {manga[1].map((genero,index)=>(
          <div key={index}>
            <h1>{genero.name}</h1>
          </div>
      ))}
      <hr/>
      <p>{manga[0].synopsis}</p>
      
    </div>
  );
}
