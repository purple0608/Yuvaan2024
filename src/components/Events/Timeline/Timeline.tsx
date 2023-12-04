import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/assets/events/Timeline.css";
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

function Timeline() {
  const top_clouds_ref = useRef<HTMLDivElement | null>(null);
  const bottom_clouds_ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const clouds: NodeListOf<HTMLElement> =
      document.querySelectorAll(".eClouds")!;
    const top_clouds = Array.from(clouds);
    const ctx = gsap.context(() => {
    const scrollTrigger = (el: HTMLElement) => {
		return {
			trigger: el,
			start: "top 35%",
			end: "+=600",
			scrub: true,
		}
	}

	top_clouds.forEach((el: HTMLElement)=>{
		if (el.offsetLeft< 500){
		gsap.to(el, {
			scrollTrigger: scrollTrigger(el),
			// top: el.offsetTop - 200,
			left: el.offsetLeft - 200,
			width: el.offsetWidth + 200,
			// height: el.offsetHeight + 200,
		})	
		} else if (el.offsetLeft> 700){
		gsap.to(el, {
			scrollTrigger: scrollTrigger(el),
			// top: el.offsetTop - 200,
			right: (1000 - el.offsetLeft) + 600,
			width: el.offsetWidth + 200,
			// height: el.offsetHeight + 200,
		})	
		}else {
		gsap.to(el, {
			scrollTrigger: scrollTrigger(el),
			// top: el.offsetTop - 200,
			width: el.offsetWidth + 200,
			// height: el.offsetHeight + 200,
		})	
		}
	});
    });

    return () => ctx.revert();
  }, [top_clouds_ref]);

  return (
    <>
      <div className="eClouds-gang clouds-top" ref={top_clouds_ref}>
        <img
          src={cloud1}
          alt="clouds"
          className="eClouds cloud1-top"
        />
       <img
          src={cloud2}
          alt="clouds"
          className="eClouds cloud2-top"
        />
        <img
          src={cloud3}
          alt="clouds"
          className="eClouds cloud3-top"
        />
        <img
          src={cloud4}
          alt="clouds"
          className="eClouds cloud4-top"
        />
        <img
          src={cloud5}
          alt="clouds"
          className="eClouds cloud5-top"
        />
        <img
          src={cloud6}
          alt="clouds"
          className="eClouds cloud6-top"
        />
        <img
          src={cloud7}
          alt="clouds"
          className="eClouds cloud7-top"
        />
        <img
          src={cloud8}
          alt="clouds"
          className="eClouds cloud8-top"
        />
        <img
          src={cloud10}
          alt="clouds"
          className="eClouds cloud9-top"
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

<div className="eClouds-gang clouds-bottom" ref={bottom_clouds_ref}>
        <img
          src={cloud1}
          alt="clouds"
          className="eClouds cloud1-bottom"
        />
        <img
          src={cloud2}
          alt="clouds"
          className="eClouds cloud2-bottom"
        />
        <img
          src={cloud3}
          alt="clouds"
          className="eClouds cloud3-bottom"
        />
        <img
          src={cloud4}
          alt="clouds"
          className="eClouds cloud4-bottom"
        />
        <img
          src={cloud5}
          alt="clouds"
          className="eClouds cloud5-bottom"
        />
        <img
          src={cloud6}
          alt="clouds"
          className="eClouds cloud6-bottom"
        />
        <img
          src={cloud7}
          alt="clouds"
          className="eClouds cloud7-bottom"
        />
        <img
          src={cloud8}
          alt="clouds"
          className="eClouds cloud8-bottom"
        />
        <img
          src={cloud10}
          alt="clouds"
          className="eClouds cloud9-bottom"
        />
      </div>
          </>
  );
}

export default Timeline;
