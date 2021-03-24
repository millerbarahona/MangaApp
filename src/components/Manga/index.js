import React from "react";

export default function Anime({ mal_id, title, image_url, publishing, caps}) {
  if(publishing){
    const cls = ""
  }
  return (
    <div className="">
      <div className="mx-auto my-2 flex flex-col ">
        <h2 className="masonry-title mx-auto">{title}</h2>
        <h2 className="masonry-title mx-auto">{mal_id}</h2>        
        <div className="-mb-2 rounded-xl">
        <img src={image_url} alt={title} className="mx-auto rounded-xl"/>
        <div className={publishing? "bg-green-200 rounded-b-xl mt-2 w-full mb-0":"bg-red-200 mt-2 rounded-b-xl mx-auto w-full"}>
          {publishing? <div className="text-center">En Publicacion</div>:<div className="text-center">Finalizado</div>}
        </div>
        </div>
        
        
      </div>
    </div>
  );
}
