import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div class="hero">
      <div class="wrapper">
        <div class="intro">
          <p>
            <span>Hamro kitab's</span> Featured Books of the<b>April</b>
          </p>
          <a href="#" class="cta">
            See More
          </a>
        </div>
        <img
          src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/800x420/img1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
