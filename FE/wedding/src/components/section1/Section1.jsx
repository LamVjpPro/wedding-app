import React from "react";
import "./Section1.css";
import "../../views/css/font.css";
import "../../js/simplyCountdown";

const Section1 = () => {
  return (
    <section id="section1" class="header__main">
      <video
        // style="width: 100%; height: 100%; object-fit: cover;"
        class="background"
        autoplay
        muted
        loop
        playsinline
        poster="https://res.cloudinary.com/dxy2muzyb/image/upload/v1689155655/wedding/section1/f8cnb8vhlexpkfpsc26f.jpg"
      >
        {/* <source
          src="https://res.cloudinary.com/dxy2muzyb/video/upload/v1689242662/wedding/video/bpbkqdmdvuzeukzqh3yn.mp4"
          type="video/mp4"
        /> */}
      </video>
      <header id="header" class="banner_main">
        <div class="overlay"></div>
        <div class="container">
          <div class="row header_main_content">
            <div class="col-md-12 col-md-offset-2 text-center">
              <h2 class="title">
                <span>Lê Hà </span>
                <span>& </span>
                <span>Tiến Tùng</span>
              </h2>
              <h2>We Are Getting Married</h2>
              <div id="countdown">
                <div class="simbly-section">
                  <div>
                    <span class="simply-amount" id="days"></span>
                    <span class="simply-word">days</span>
                  </div>
                </div>
                <div class="simbly-section">
                  <div>
                    <span class="simply-amount" id="hours"></span>
                    <span class="simply-word">hours</span>
                  </div>
                </div>
                <div class="simbly-section">
                  <div>
                    <span class="simply-amount" id="minutes"></span>
                    <span class="simply-word">minutes</span>
                  </div>
                </div>
                <div class="simbly-section">
                  <div>
                    <span class="simply-amount" id="seconds"></span>
                    <span class="simply-word">seconds</span>
                  </div>
                </div>
              </div>
              <p>
                <a href="#" class="btn btn-default btn-sm btn-save-date">
                  Save the date
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Section1;
