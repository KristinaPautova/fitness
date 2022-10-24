import React from "react";
import "./Billboard.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Billboard = () => {
  return (
    <div className="back">
      <div className="home" />
      <div className="home__main">
        <div className="home__main_left">
          <h2>Track your progress weekly</h2>
          <div className="left__text">
            We're tracking your goal weight with body fat measures, weight and
            general feeling. You may have the same body weight but feel 10x
            better.Changing your lifestyle with a fast paced life may seem hard
            or impossible, but with small steps each week you can achieve your
            dream physique and live a healthier life.
          </div>
          <button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Online coaching
            </Link>
          </button>
        </div>
        <div className="home__main_right">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                style={{ borderRadius: "15px" }}
                src="https://99px.ru/sstorage/86/2018/03/image_862703182214331843531.gif"
                alt="sport"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ borderRadius: "15px" }}
                src="https://cutewallpaper.org/24/animated-sports-gifs/james-neilson-%E2%80%94-short-song-about-sports%E2%80%9D-made-some-visuals-with.gif"
                alt="sport"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ borderRadius: "15px" }}
                src="https://cutewallpaper.org/24/animated-sports-gifs/deporte-esporte-soccer-gif-on-gifer-by-samuhn.gif"
                alt="sport"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
