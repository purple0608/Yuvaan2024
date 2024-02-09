import React, { useEffect } from "react";
import { TimelineEffect } from "./TimelineEffect";
import { Item } from "./Item";
import { GalleryData } from "../../../assets/gallery/GalleryData";
import "/src/assets/gallery/Timeline.css";
import Navbar from "../../Navbar/Navbar";

import secret from "/src/components/Gallery/Preview/secret.png";

const Timeline = () => {
  useEffect(() => {
    TimelineEffect({});
  }, []);

  return (
    <>
      <Navbar />
      <div id="timeline-1" className="timeline-container">
        <div className="timeline-header">
          
      <div className="preview_past-events">
        <img src={secret} alt="" />
      </div>
        </div>
        <div className="timeline">
          {GalleryData.map((item) => {
            return <Item {...item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
