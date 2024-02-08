import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/assets/events/Map.css";
import cloud1 from "/src/assets/events/clouds/cloud1.png";
import cloud2 from "/src/assets/events/clouds/cloud2.png";
import cloud3 from "/src/assets/events/clouds/cloud3.png";
import cloud4 from "/src/assets/events/clouds/cloud4.png";
import cloud5 from "/src/assets/events/clouds/cloud5.png";
import cloud6 from "/src/assets/events/clouds/cloud6.png";
import cloud7 from "/src/assets/events/clouds/cloud7.png";
import cloud8 from "/src/assets/events/clouds/cloud8.png";
import cloud9 from "/src/assets/events/clouds/cloud9.png";
import cloud10 from "/src/assets/events/clouds/cloud10.png";
import MapItems from "./MapItems";
import { useGSAP } from "@gsap/react";

function Map({ timeline }: { timeline: GSAPTimeline }) {
  const clouds_ref = useRef<HTMLDivElement | null>(null);

  const isMobile = window.innerWidth <= 768;
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const clouds: NodeListOf<HTMLElement> =
        document.querySelectorAll(".eClouds")!;
      const top_clouds = Array.from(clouds);
      const scrollTrigger = (el: HTMLElement) => {
        return {
          trigger: el,
          start: "top 35%",
          end: "+=600",
          scrub: true,
        };
      };

      top_clouds.forEach((el: HTMLElement) => {
        if (el.offsetLeft < 500) {
          gsap.to(el, {
            scrollTrigger: scrollTrigger(el),
            left: el.offsetLeft - 200,
            width: el.offsetWidth + 200,
          });
        } else if (el.offsetLeft > 700) {
          gsap.to(el, {
            scrollTrigger: scrollTrigger(el),
            right: 1000 - el.offsetLeft + 600,
            width: el.offsetWidth + 200,
          });
        } else {
          gsap.to(el, {
            scrollTrigger: scrollTrigger(el),
            width: el.offsetWidth + 200,
          });
        }
      });
    },
    { scope: clouds_ref },
  );

  return (
    <div   className={isMobile ? "event-void" : "events-map"} ref={clouds_ref}>
      <div className="eClouds-gang events-map-clouds-top">
        <img
          src={cloud1}
          alt="clouds"
          className="eClouds events-map-cloud1-top"
        />
        <img
          src={cloud2}
          alt="clouds"
          className="eClouds events-map-cloud2-top"
        />
        <img
          src={cloud3}
          alt="clouds"
          className="eClouds events-map-cloud3-top"
        />
        <img
          src={cloud4}
          alt="clouds"
          className="eClouds events-map-cloud4-top"
        />
        <img
          src={cloud5}
          alt="clouds"
          className="eClouds events-map-cloud5-top"
        />
        <img
          src={cloud6}
          alt="clouds"
          className="eClouds events-map-cloud6-top"
        />
        <img
          src={cloud7}
          alt="clouds"
          className="eClouds events-map-cloud7-top"
        />
        <img
          src={cloud8}
          alt="clouds"
          className="eClouds events-map-cloud8-top"
        />
        <img
          src={cloud10}
          alt="clouds"
          className="eClouds events-map-cloud9-top"
        />
      </div>

      <div className="events-map-tlparent">
        <div className="events-map-container" id="events-timeline">
          <MapItems timeline={timeline} />
        </div>
      </div>

      <div className="eClouds-gang events-map-clouds-bottom">
        <img
          src={cloud1}
          alt="clouds"
          className="eClouds events-map-cloud1-bottom"
        />
        <img
          src={cloud2}
          alt="clouds"
          className="eClouds events-map-cloud2-bottom"
        />
        <img
          src={cloud3}
          alt="clouds"
          className="eClouds events-map-cloud3-bottom"
        />
        <img
          src={cloud4}
          alt="clouds"
          className="eClouds events-map-cloud4-bottom"
        />
        <img
          src={cloud5}
          alt="clouds"
          className="eClouds events-map-cloud5-bottom"
        />
        <img
          src={cloud6}
          alt="clouds"
          className="eClouds events-map-cloud6-bottom"
        />
        <img
          src={cloud7}
          alt="clouds"
          className="eClouds events-map-cloud7-bottom"
        />
        <img
          src={cloud8}
          alt="clouds"
          className="eClouds events-map-cloud8-bottom"
        />
        <img
          src={cloud10}
          alt="clouds"
          className="eClouds events-map-cloud9-bottom"
        />
      </div>
    </div>
  );
}

export default Map;
