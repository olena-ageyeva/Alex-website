import React, { useState } from "react";
import "./gallery.css";

const galleryData = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Gallery = () => {
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(false);

  const onClick = (event) => {
    setSelected(!selected);
    console.log(event.target.id);
    selected ? setActive(null) : setActive(event.target.id);
  };

  const status = selected ? "away" : "";

  const GalleryData = () =>
    galleryData.map((item) => (
      <div class={`pic pic-${item} ${active === item ? "active" : status}`}>
        <img
          src={`https://100dayscss.com/codepen/40-${item}.jpg`}
          alt=""
          id={`${item}`}
          onClick={onClick}
        />
      </div>
    ));

  return (
    <div class="frame">
      <div class="pics">
        <GalleryData />
      </div>
    </div>
  );
};

export default Gallery;
