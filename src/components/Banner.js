import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./style.css";

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/background/bg-1.jpg" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/background/bg-2.jpg" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/background/bg-3.jpg" className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
