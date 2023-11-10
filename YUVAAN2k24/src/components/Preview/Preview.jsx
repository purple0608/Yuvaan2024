import React, { useEffect } from "react";
import Fireflies from "./Fireflies";
import { EventImgData } from "../../assets/EventImgData";
import EventItem from "./Item";
import "./Preview.css";
import { SwiperEffect } from "./Swiper";

const Preview =() => {
  useEffect(() => {
    Fireflies({});
    SwiperEffect({});
  }, []);

  return (
    <div className="preview-container">
      <div id="container"></div>
      <div className="clouds">
        <div className="clouds-1"></div>
        <div className="clouds-2"></div>
        <div className="clouds-3"></div>
      </div>
      <div className="img_div mb-2">
        <img src="src/components/Preview/PastEvents.png" alt="" />
      </div>
      <div className="img_div mb-5">
        <img src="src/components/Preview/downline.png" alt="" />
      </div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {EventImgData.map((item) => {
            return <EventItem {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
