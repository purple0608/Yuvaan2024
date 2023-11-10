import React, { useEffect } from "react";
import Fireflies from "./Fireflies";
import { EventImgData } from "../../../assets/gallery/EventImgData";
import EventItem from "./Item";
import "/src/assets/gallery/Preview.css";
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
        <img src="src/assets/gallery/PastEvents.png" alt="" />
      </div>
      <div className="img_div mb-5">
        <img src="src/assets/utils/decorator-hr.png" alt="" />
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
