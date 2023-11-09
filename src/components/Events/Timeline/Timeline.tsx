import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/all";
import "/src/assets/events/Timeline.css";

function Timeline() {
  const top_clouds_ref = useRef<HTMLDivElement | null>(null);
  const bottom_clouds_ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const clouds: NodeListOf<HTMLElement> =
      top_clouds_ref.current?.querySelectorAll(".clouds")!;
    const top_clouds = Array.from(clouds);
    let ctx = gsap.context(() => {
      let tloud_tl = gsap.timeline();
    });

    return () => ctx.revert();
  }, [top_clouds_ref]);

  return (
    <>
      <div className="clouds-gang clouds-top" ref={top_clouds_ref}>
        <img
          src="/src/assets/events/clouds/cloud1.png"
          alt="clouds"
          className="clouds cloud1-top"
        />
        <img
          src="/src/assets/events/clouds/cloud2.png"
          alt="clouds"
          className="clouds cloud2-top"
        />
        <img
          src="/src/assets/events/clouds/cloud3.png"
          alt="clouds"
          className="clouds cloud3-top"
        />
        <img
          src="/src/assets/events/clouds/cloud4.png"
          alt="clouds"
          className="clouds cloud4-top"
        />
        <img
          src="/src/assets/events/clouds/cloud5.png"
          alt="clouds"
          className="clouds cloud5-top"
        />
        <img
          src="/src/assets/events/clouds/cloud6.png"
          alt="clouds"
          className="clouds cloud6-top"
        />
        <img
          src="/src/assets/events/clouds/cloud7.png"
          alt="clouds"
          className="clouds cloud7-top"
        />
        <img
          src="/src/assets/events/clouds/cloud8.png"
          alt="clouds"
          className="clouds cloud8-top"
        />
        <img
          src="/src/assets/events/clouds/cloud10.png"
          alt="clouds"
          className="clouds cloud9-top"
        />
      </div>

      <div className="tlparent">
        <div className="svg-container">
          <svg
            id="path-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 250"
          >
            <path
              id="curvedPath"
              d="M10 10 C 10 10, 460 30, 40 80 C 40 80, -120 120, 105 140C 105 140, 460 160, 10 220"
              stroke="rgba(255,255,255,0.6)"
              fill="transparent"
              strokeDasharray="5, 5"
            />
          </svg>
        </div>
      </div>

      <div className="clouds-gang clouds-bottom" ref={bottom_clouds_ref}>
        <img
          src="/src/assets/events/clouds/cloud1.png"
          alt="clouds"
          className="clouds cloud1-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud2.png"
          alt="clouds"
          className="clouds cloud2-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud3.png"
          alt="clouds"
          className="clouds cloud3-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud4.png"
          alt="clouds"
          className="clouds cloud4-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud5.png"
          alt="clouds"
          className="clouds cloud5-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud6.png"
          alt="clouds"
          className="clouds cloud6-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud7.png"
          alt="clouds"
          className="clouds cloud7-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud8.png"
          alt="clouds"
          className="clouds cloud8-bottom"
        />
        <img
          src="/src/assets/events/clouds/cloud10.png"
          alt="clouds"
          className="clouds cloud9-bottom"
        />
      </div>
    </>
  );
}

export default Timeline;
