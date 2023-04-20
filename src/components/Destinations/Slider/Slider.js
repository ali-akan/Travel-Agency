
import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import classes from "./Slider.module.css";
import Destinations from "./Destinations";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const slide_destinations = [
  "paris",
  "newYork",
  "london",
  "bangkok",
  "hongKong",
  "dubai",
  "singapore",
  "rome",
  "macau",
  "istanbul",
];

const slide_text = [
  "Paris",
  "New York",
  "London",
  "Bangkok",
  "Hong Kong",
  "Dubai",
  "Singapore",
  "Rome",
  "Macau",
  "Istanbul",
];

const Slider = () => {
  return (
    <div className={classes.dest}>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
      >
        {slide_destinations.map((destination, i) => (
          <SwiperSlide  key={i}  className={classes.swi}> 
            <div>
              <Destinations destination={destination}  />
              <h1 className={classes.text}>{slide_text[i]}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
