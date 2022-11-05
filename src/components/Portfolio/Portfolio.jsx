import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Simon from "../../img/Simon.png";
import Fitness from "../../img/Fitness.png";
import ToDo from "../../img/ToDo.png";
import WhiteBoard from "../../img/WhiteBoard.png";
import NoteKeeper from "../../img/Notekeeper.png";
import DN from "../../img/DN.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Fitness} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DN} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NoteKeeper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ToDo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Simon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={WhiteBoard} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
