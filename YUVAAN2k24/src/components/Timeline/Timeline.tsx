import React, { useEffect } from "react";

import { TimelineEffect } from "./TimelineEffect";
import Item from "./Item";
import { GalleryData } from "../../assets/GalleryData";
import "./Timeline.css";

const Timeline: React.FC = () => {
  useEffect(() => {
    TimelineEffect();
  }, []);

  return (
    <div id="timeline-1" className="timeline-container">
      <div className="timeline-header">
        <h2 className="timeline-header__title">Cultural Events</h2>
      </div>
      <div className="timeline">
        {GalleryData.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Timeline;
