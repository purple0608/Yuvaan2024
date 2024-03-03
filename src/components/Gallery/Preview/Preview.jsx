import { EventImgData } from "../../../assets/gallery/EventImgData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pastEvents from "/src/components/Gallery/Preview/PastEvents.png";
import downline from "/src/assets/utils/decorator-hr-lg.png";

import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";
import "/src/assets/gallery/Preview.css";

const Preview = () => {
  return (
    <div className="preview-container">
      <div className="container"></div>
      <div className="clouds">
        <div className="clouds-1"></div>
        <div className="clouds-2"></div>
        <div className="clouds-3"></div>
      </div>
      <div className="preview_past-events">
        <img src={pastEvents} alt="" />
      </div>
      <div className="preview_downline">
        <img src={downline} alt="" className="preview-divider" />
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
          delay: 3000,
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
              <img src={item.src} alt="event" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Link to={"/timeline"} className="link">
        <button className="btn view-btn">Explore</button>
      </Link>
    </div>
  );
};

export default Preview;
