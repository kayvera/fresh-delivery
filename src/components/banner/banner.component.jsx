import React from "react";
import "./banner.styles.scss";
import ImgComp from "./banner.image";
import i1 from "../../assets/banner-pics/1.jpeg";

const Banner = () => (
  <div>
    <div className="banner">
      <ImgComp src={i1} />
      <div className="content1">
        <h1 className="title">HEALTHY MEALS DELIVERED STRAIGHT TO YOUR HOME</h1>
        <span class="subtitle">Organic, Fresh, Ready-to-Eat</span>
      </div>
    </div>
  </div>
);

export default Banner;
