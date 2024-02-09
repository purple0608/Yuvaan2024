import "/src/assets/events/Map.css";
import { labelToScroll } from "../../../assets/utils/GSAPScroll.ts";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const mapData1 = [
  { time: "11:00am-12:00pm", event: "Inaugration", flag: 0 },
  { time: "12:00pm-12:30pm", event: "Escape Room", flag: 0 },
  {
    time: "12:00pm-01:00pm",
    event: "Yuvaans Got Talent (R1)",
    flag: 1,
    link: "start-3",
  },
  { time: "01:00pm-01:30pm", event: "Whimsical Debate", flag: 0 },
  {
    time: "02:00pm-03:00pm",
    event: "Yuvaans Got Talent (R2)",
    flag: 1,
    link: "start-3",
  },
  { time: "03:00pm-04:00pm", event: "Chandrayaan Workshop", flag: 0 },
  { time: "03:00pm-04:00pm", event: "Assamese Fashion Show", flag: 0 },
  { time: "04:00pm-05:00pm", event: "Word Weave", flag: 0 ,link:"https://unstop.com/p/word-weave-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891157"},
  { time: "05:00pm-06:00pm", event: "Face Painting", flag: 0 },
];

const mapData2 = [
  {
    time: "10:00am-12:00pm",
    event: "Treasure Hunt (R1)",
    flag: 1,
    link: "display-1",
  },
  { time: "12:00pm-01:00pm", event: "Clay Modelling Workshop", flag: 0 },
  {
    time: "02:00pm-03:00pm",
    event: "Treasure Hunt (R2)",
    flag: 1,
    link: "display-1",
  },
  { time: "02:30pm-04:00pm", event: "Trivia Quiz", flag: 1, link: "start-8" },
  { time: "03:00pm-04:30pm", event: "Symphony (R2)", flag: 1, link: "start-4" },
  {
    time: "04:00pm-05:30pm",
    event: "Cosplay",
    flag: 1,
    link: "start-7",
  },
  {
    time: "05:00pm-06:30pm",
    event: "Move Mania (R2)",
    flag: 1,
    link: "start-6",
  },
  { time: "05:30pm-06:30pm", event: "Art Marathon", flag: 0 },
];

const mapData3 = [
  { time: "10:00am-12:00pm", event: "Mock CID (R1)", flag: 1, link: "start-2" },
  { time: "12:00pm-01:30pm", event: "Script & Act", flag: 0 ,link:"https://unstop.com/p/script-act-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891193"},
  { time: "02:00pm-03:30pm", event: "LIC Quiz", flag: 0 ,link:"https://unstop.com/p/liclifestyle-information-culture-quiz-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-894625"},
  { time: "02:00pm-04:00pm", event: "Mock CID (R2)", flag: 1, link: "start-2" },
  { time: "02:30pm-04:00pm", event: "Trivia Quiz", flag: 1, link: "start-8" },
  { time: "03:00pm-04:00pm", event: "Riff (R2)", flag: 1, link: "start-5" },
  { time: "04:00pm-05:00pm", event: "Filmy Dance Fusion", flag: 0 ,link:"https://unstop.com/p/the-bolly-beatsolo-indian-institute-of-information-technology-iiit-guwahati-891187"},
  { time: "05:00pm-06:00pm", event: "Open Mic", flag: 0 ,link:"https://unstop.com/p/open-mic-solo-indian-institute-of-information-technology-iiit-guwahati-891179"},
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
  const handleClick = (flag: number, link: string) => {
    console.log("handling click");
    if (flag == 1) {
        handleSeekButton(link);
    }else {
        window.open(link, '_blank').focus()
    }
  };
  return (
    <>
      <ul id="events-map-ul1">
        {mapData1.map((item, index) => (
          <button
            key={index}
            id="events-map-l"
            onClick={() => {
              handleClick(item.flag, item.link);
            }}
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
            onClick={() => {
              handleClick(item.flag, item.link);
            }}
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
            onClick={() => {
              handleClick(item.flag, item.link);
            }}
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
