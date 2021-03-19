import React from "react";

export default function Anime({ mal_id, title, image_url }) {
  return (
    <div className="">
      <div className="mx-auto my-2">
        <h2 className="masonry-title mx-auto">{title}</h2>
        <img src={image_url} alt={title} className="mx-auto rounded-xl"/>
      </div>
    </div>
  );
}
