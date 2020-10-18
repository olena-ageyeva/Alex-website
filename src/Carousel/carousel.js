import React from "react";
import "./carousel.css";
import picture1 from "./image1.png";
import picture2 from "./image2.png";
import picture3 from "./image3.png";

const Caurousel = () => {
  return (
    <div class="frame">
      <div class="center">
        <div class="card card-1">
          <div class="top"></div>
          <div class="content">
            <img src={picture1} alt="1" id="image1" />
          </div>
        </div>

        <div class="card card-2">
          <div class="top"></div>
          <div class="content">
            <img src={picture2} alt="2" id="image2" />
          </div>
        </div>

        <div class="card card-3">
          <div class="top"></div>
          <div class="content">
            <img src={picture3} alt="3" id="image3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caurousel;
