import { useEffect } from "react";
import { PreviewEffect } from "./PreviewEffect";
import { EventImgData } from "../../assets/EventImgData";
import { EventItem } from "./Item";
import './Preview.css'

const Preview = () => {
  useEffect(() => {
    PreviewEffect();
  }, []);

  return (
    <div className="preview-container">
      <div id="container"> </div>
      <div class="clouds">
        <div class="clouds-1"></div>
        <div class="clouds-2"></div>
        <div class="clouds-3"></div>
      </div>
      <h1 className="preview-header">Past Events</h1>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          {EventImgData.map((item) => {
            return <EventItem {...item} key={item.id} />;
          })} 
        </div>
      </div> 
    </div>
  );
};

export default Preview;
