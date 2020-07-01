import React, { useState } from "react";
import "./banner.styles.scss";
import ImgComp from "./banner.image";
import i1 from "../../assets/banner-pics/1.jpeg";
import i2 from "../../assets/banner-pics/2.jpeg";

function Banner() {
  let bannerArr = [<ImgComp src={i1} />, <ImgComp src={i2} />];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (bannerArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (bannerArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="banner">
      {bannerArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Banner;
