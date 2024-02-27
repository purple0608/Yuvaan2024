import "/src/assets/events/Map.css";
import "/src/assets/events/Clouds.css";
import { labelToScroll } from "../../../assets/utils/GSAPScroll.ts";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const mapData1 = [
  { time: "11:00am-12:00pm", event: "Inaugration", flag: 0 },
  {
    time: "12:00pm-1:30pm",
    event: "Movie Mania",
    flag: 0,
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLScN1xnyA4vw8gEai2cIZ8tOTIMajyqf9tgTK8wM4nGt6YejnA/viewform",
  },
  {
    time: "02:00pm-03:00pm",
    event: "Whimsical Debates",
    flag: 0,
    link: "https://unstop.com/events/giggle-gather-whimsical-debate-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891140",
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLScnJT---WsiFMFuxe_wtBpIKptOmCCeKobyotLfoUXXrWCTLg/viewform",
  },
  { time: "02:00pm-06:00pm", event: "Game Room", flag: 0 },
  {
    time: "03:00pm-05:00pm",
    event: "Fashion Show",
    flag: 0,
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSeoMXORnNHsaP3BW4tg5U06cu_xBmtFzx3Gxm-K3XnvlXrsPA/viewform",
  },
  { time: "05:00pm-06:00pm", event: "Face Painting", flag: 0 },
];

const mapData2 = [
  {
    time: "11:00am-1:00pm",
    event: "Treasure Hunt (R1)",
    flag: 1,
    link: "display-1",
  },
  {
    time: "02:00pm-03:00pm",
    event: "Treasure Hunt (R2)",
    flag: 1,
    link: "display-1",
  },
  { time: "03:00pm-04:30pm", event: "Symphony (R2)", flag: 1, link: "start-4" },
  { time: "03:30pm-05:00pm", event: "Trivia Quiz", flag: 1, link: "start-8" },
  {
    time: "04:00pm-05:00pm",
    event: "Word Weave",
    flag: 0,
    link: "https://unstop.com/p/word-weave-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891157",
  },
  { time: "03:00pm-06:00pm", event: "Game Room", flag: 0 },
  {
    time: "05:00pm-06:00pm",
    event: "Yuvaan's Got Talent",
    flag: 1,
    link: "start-3",
  },
  {
    time: "05:00pm-06:00pm",
    event: "Art Marathon",
    flag: 0,
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWFmsejUDaTvOdolVDdzxS32rvWs8tbRnMKUynrCbrynJsxA/viewform",
  },
];

const mapData3 = [
  { time: "11:00am-1:00pm", event: "Mock CID (R1)", flag: 1, link: "start-2" },
  { time: "02:00pm-03:30pm", event: "Mock CID (R2)", flag: 1, link: "start-2" },
  {
    time: "03:00pm-04:00pm",
    event: "LIC Quiz",
    flag: 0,
    link: "https://unstop.com/p/liclifestyle-information-culture-quiz-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-894625",
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWFmsejUDaTvOdolVDdzxS32rvWs8tbRnMKUynrCbrynJsxA/viewform",
  },
  { time: "02:30pm-04:00pm", event: "Trivia Quiz", flag: 1, link: "start-8" },
  { time: "03:30pm-04:30pm", event: "Riff (R2)", flag: 1, link: "start-5" },
  {
    time: "03:30pm-04:30pm",
    event: "Filmy Dance Fusion",
    flag: 0,
    link: "https://unstop.com/p/the-bolly-beatsolo-indian-institute-of-information-technology-iiit-guwahati-891187",
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSd-erobOBEr4ifwCYcNQqLa0W-XkwDD5jQoMm0H9ZWr3IzH5g/viewform",
  },
  { time: "03:30pm-06:00pm", event: "Game Room", flag: 0 },
  {
    time: "4:00pm-05:00pm",
    event: "Script & Act",
    flag: 0,
    link: "https://unstop.com/p/script-act-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891193",
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSdS-_g_3d2j0N9kI6DH_-_o7OIlqv-ff24oQ-9ko74Xl1lTkw/viewform",
  },

  {
    time: "05:00pm-06:00pm",
    event: "Open Mic",
    flag: 0,
    link: "https://unstop.com/p/open-mic-solo-indian-institute-of-information-technology-iiit-guwahati-891179",
    iiitg:
      "https://docs.google.com/forms/d/e/1FAIpQLSdPSn2zn2-HJ7lBhsPFcr_mpuJR-GZVwsPwZuZdoliH9EAmYQ/viewform",
  },
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
    } else {
      window.open(link, "_blank").focus();
    }
  };

  const mapper = (item, index) => {
    if (item.link && item.iiitg) {
      return (
        <div className="maps-linkstack" key={index}>
          <button
            id="events-map-l"
            onClick={() => {
              handleClick(item.flag, item.link);
            }}
          >
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </button>

          <button
            id="events-map-IIITG"
            onClick={() => {
              handleClick(0, item.iiitg);
            }}
          >
            <div>IIIT-link</div>
          </button>
        </div>
      );
    } else if (item.link) {
      return (
        <div className="maps-linkstack" key={index}>
          <button
            id="events-map-l"
            onClick={() => {
              handleClick(item.flag, item.link);
            }}
          >
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </button>
        </div>
      );
    } else if (item.iiitg) {
      return (
        <div className="maps-linkstack" key={index}>
          <div id="events-map-l">
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </div>

          <button
            id="events-map-IIITG"
            onClick={() => {
              handleClick(0, item.iiitg);
            }}
          >
            <div>IIIT-link</div>
          </button>
        </div>
      );
    } else {
      return (
        <div className="maps-linkstack" key={index}>
          <div id="events-map-l">
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </div>
        </div>
      );
    }
  };
  const flag = window.innerWidth <= 1520;
  return (
    <>
      <div id="events-map-ul1" className="events-map-ul">
        {mapData1.map(mapper)}
      </div>
      <div id="events-map-ul2" className="events-map-ul">
        {mapData2.map(mapper)}
      </div>

      <div id="events-map-ul3" className="events-map-ul">
        {mapData3.map(mapper)}
      </div>
    </>
  );
};

export default MapItems;
