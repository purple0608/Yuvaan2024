import "/src/assets/events/Map.css";
import { labelToScroll } from "../../../assets/utils/GSAPScroll.ts";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const mapData1 = [
  { time: "11:00am-12:00pm", event: "Inaugration" },
  { time: "12:00pm-12:30pm", event: "Escape Room" },
  { time: "12:00pm-01:00pm", event: "Yuvaans Got Talent (R1)" },
  { time: "01:00pm-01:30pm", event: "Whimsical Debate" },
  { time: "02:00pm-03:00pm", event: "Yuvaans Got Talent (R2)" },
  { time: "03:00pm-04:00pm", event: "Chandrayaan Workshop" },
  { time: "03:00pm-04:00pm", event: "Assamese Fashion Show" },
  { time: "04:00pm-05:00pm", event: "Word Weave" },
  { time: "05:00pm-06:00pm", event: "Face Painting" }
];

const mapData2 = [
  { time: "10:00am-12:00pm", event: "Treasure Hunt (R1)" },
  { time: "12:00pm-01:00pm", event: "Clay Modelling Workshop" },
  { time: "02:00pm-03:00pm", event: "Treasure Hunt (R2)" },
  { time: "02:30pm-04:00pm", event: "Trivia Quiz" },
  { time: "03:00pm-04:30pm", event: "Symphony (R2)" },
  { time: "04:00pm-05:30pm", event: "Cosplay" },
  { time: "05:00pm-06:30pm", event: "Move Mania (R2)" },
  { time: "05:30pm-06:30pm", event: "Art Marathon" },
];

const mapData3 = [
  { time: "10:00am-12:00pm", event: "Mock CID (R1)" },
  { time: "12:00pm-01:30pm", event: "Script & Act" },
  { time: "02:00pm-03:30pm", event: "LIC Quiz" },
  { time: "02:00pm-04:00pm", event: "Mock CID (R2)" },
  { time: "02:30pm-04:00pm", event: "Trivia Quiz" },
  { time: "03:00pm-04:00pm", event: "Riff (R2)" },
  { time: "04:00pm-05:00pm", event: "Filmy Dance Fusion" },
  { time: "05:00pm-06:00pm", event: "Open Mic" },
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
