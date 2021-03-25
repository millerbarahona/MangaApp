import React from "react";
import {Link} from 'react-router-dom'
import './estilos.css'

export default function Anime({ mal_id, title, image_url, publishing, caps}) {

  const titleURL = title.replaceAll(' ', '-')
  return (
    <div className="">
      <Link to={`/Manga/${mal_id}/${titleURL}`}>
        <div className="mx-auto my-2 flex flex-col" >
          <h2 className="masonry-title mx-auto">{title}</h2>
          <h2 className="masonry-title mx-auto">{mal_id}</h2>        
          <div className="-mb-2 rounded-xl contenedor">
            <div className="">
            <img src={image_url} alt={title} className="mx-auto rounded-xl"/>
            {publishing? <span className="text-center bg-green-200 rounded-b-xl mt-2 w-full mb-0 bg-opacity-70">En Publicacion</span>:<span className=" bg-opacity-70 text-center bg-red-200 mt-2 rounded-b-xl mx-auto">Finalizado</span>}
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}
