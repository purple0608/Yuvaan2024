import { useEffect } from "react";

import { TimelineEffect } from "./TimelineEffect";
import { Item } from "./Item";
import { GalleryData } from "../../assets/GalleryData";
import "./Timeline.css";

const Timeline = () => {
  useEffect(() => {
    TimelineEffect();
  }, []);

  return (
    <div id="timeline-1" class="timeline-container">
      <div class="timeline-header">
        <h2 class="timeline-header__title">Cultural Events</h2>
      </div>
      <div class="timeline">
        {GalleryData.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Timeline;
