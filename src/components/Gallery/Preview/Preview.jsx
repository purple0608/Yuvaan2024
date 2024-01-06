import React, { useState,useEffect } from "react";
import { EventImgData } from "../../../assets/gallery/EventImgData";
import "./Preview.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Preview = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set a threshold value based on your requirements
      const threshold = 200;

      // Toggle arrow visibility based on scroll position
      setIsArrowVisible(scrollY < threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isDesktop = window.innerWidth >= 1024;

  return (
    <div className="preview-container">
      {isArrowVisible && isDesktop && (
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      )}
      <div id="container"></div>
      <div className="clouds">
        <div className="clouds-1"></div>
        <div className="clouds-2"></div>
        <div className="clouds-3"></div>
      </div>
      <div className="past-events">
        <img src="src/components/Gallery/Preview/PastEvents.png" alt="" />
      </div>
      <div className="downline">
        <img src="src/components/Gallery/Preview/downline.png" alt="" />
      </div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#d4af37",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        navigation={true}
        modules={[Keyboard, Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="banner"
      >
        {EventImgData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.src} alt="event " />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Link to={"/timeline"} className="link">
        <button className="btn view-btn">View More</button>
      </Link>
    </div>
  );
};

export default Preview;
