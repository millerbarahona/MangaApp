import React from "react";
import Manga from "../Manga/index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './estilos.css'
export default function ListOfMangas({ mangas }) {
  let i=0
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3,1100:4,1200:5 }} className="gap-2 mt-2">
      <Masonry className="sm:gap-2 container mx-auto p-0 m-0">
        {mangas.map(({ mal_id, title, image_url,publishing, chapters}, index) => (
          
          <div key={index+1} className="border-2 mx-auto bg-gray-300 rounded-xl my-1 p-0">
            <Manga
            title={title}
            mal_id={mal_id}
            image_url={image_url}
            key={mal_id}
            publishing={publishing}
            caps ={chapters}
          />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
