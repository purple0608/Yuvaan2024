import { useLayoutEffect, useRef } from "react";
import "/src/assets/events/Map.css";
import MapItems from "./MapItems";
import Clouds from "./Clouds.tsx";

function Map({ timeline }: { timeline: GSAPTimeline }) {
  

  return (
    <div className="events-map">
          <Clouds position="top" /> 

      <div className="events-map-tlparent">
        <div className="events-map-container" id="events-timeline">
          <MapItems timeline={timeline} />
        </div>
      </div>
          <Clouds position="bottom"/> 
          
    </div>
  );
}

export default Map;
