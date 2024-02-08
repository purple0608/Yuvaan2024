import "/src/assets/events/Map.css";
import { labelToScroll } from "../../../assets/utils/GSAPScroll.ts";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const mapData = [
  { time: "11:30am", event: "Treasure Hunt" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
];

const MapItems = ({ timeline }: { timeline: GSAPTimeline }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const handleSeekButton = (label: string) => {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: {
        y: labelToScroll(timeline.current!, label),
      },
    });
  };
  return (
    <>
      <ul id="events-map-ul1">
        {mapData.map((item, index) => (
          <button
            key={index}
            id="events-map-l"
            onClick={() => handleSeekButton("start-3")}
          >
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </button>
        ))}
      </ul>
      <ul id="events-map-ul2">
        {mapData.map((item, index) => (
          <button
            key={index}
            id="events-map-l"
            onClick={() => handleSeekButton("start-3")}
          >
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </button>
        ))}
      </ul>
    </>
  );
};

export default MapItems;
