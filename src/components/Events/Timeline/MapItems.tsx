import "/src/assets/events/Map.css";
import { labelToScroll } from "../../../assets/utils/GSAPScroll.ts";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const mapData1 = [
  { time: "11:00-12:00", event: "Inaugration" },
  { time: "12-12:30", event: "Escape Room" },
  { time: "12:00-1:00", event: "Yuvaans Got Talent (R1)" },
  { time: "1:00-1:30", event: "Whimsical Debate" },
  { time: "2:00-3:00", event: "Yuvaans Got Talent (R2)" },
  { time: "3:00-4:00", event: "Chandrayaan Workshop" },
  { time: "4:00-5:00", event: "Word Weave" },
  { time: "5:00-6:00", event: "Face Painting" }
];

const mapData2 = [
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

const mapData3 = [
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
        {mapData1.map((item, index) => (
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
        {mapData2.map((item, index) => (
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
      <ul id="events-map-ul3">
        {mapData3.map((item, index) => (
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
