import gsap from "gsap";
import { useEffect, useState, useRef, useCallback, lazy } from "react";
import "/src/assets/events/Mountains.css";
import decorator_hr_lg from "/src/assets/utils/decorator-hr-lg.png";

const background = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/background.png";
const glow = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/glow.png";
const fog_7 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_7.png";
const mountain_10 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_10.png";
const fog_6 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_6.png";
const mountain_9 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_9.png";
const mountain_8 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_8.png";
const mountain_7 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_7.png";
const events_font = "https://dpqe9pvop7vdk.cloudfront.net/events/clouds/events_font.png";
const mountain_6 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_6.png";
const fog_4 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_4.png";
const mountain_5 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_5.png";
const fog_3 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_3.png";
const mountain_4 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_4.png";
const mountain_3 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_3.png";
const fog_2 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_2.png";
const mountain_2 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_2.png";
const mountain_1 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/mountain_1.png";
const fog_1 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fog_1.png";
const left_fireflies = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/left_fireflies.png";
const right_fireflies = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/right_fireflies.png";
const fireflies_3 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fireflies_3.png";
const fireflies_4 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fireflies_4.png";
const fireflies_5 = "https://dpqe9pvop7vdk.cloudfront.net/events/images_parallax/fireflies_5.png";

function Mountains() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const mount = useRef<HTMLElement | null>(null);
  const [parallaxElements, setParallaxElements] = useState<HTMLElement[]>(
    Array.from(document.querySelectorAll(".parallax")),
  );
    

  useEffect(() => {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll(".parallax");
    setParallaxElements(Array.from(elements));
  }, []);

  useEffect(() => {
      const handleLoad = (e) =>{
          console.log(e);
      document
        .querySelectorAll<HTMLElement>(".parallax")
        .forEach((el: HTMLElement) => {
          gsap.from(el, {
            top: 1000,
            duration: 2.5,
          });
        });
      window.scrollTo(0, 0);
    };
    window.addEventListener("onLoaderClose", handleLoad);

    return () => {
      window.removeEventListener("onLoaderClose", handleLoad);
    };
  }, [parallaxElements]);

  useEffect(() => {
    let mc = mount.current;

    function handleParallax(e: MouseEvent) {
      if (e.clientY + scrollY > mc?.offsetHeight! + 100) {
        return;
      }
      const xValue = e.clientX - dimensions.width;
      const yValue = e.clientY - dimensions.height;

      parallaxElements.forEach((el) => {
        const isInLeft =
          parseFloat(getComputedStyle(el).left) < dimensions.width / 2 ? 1 : -1;
        const zValue =
          (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        const speedx = Number(el.dataset.speedx);
        const speedy = Number(el.dataset.speedy);
        const speedz = Number(el.dataset.speedz);
        gsap.set(el, { perspective: 2300, xPercent: -50, yPercent: -50 });
        gsap.set(el, { z: zValue * speedz });
        const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
        xTo(-xValue * speedx);
        yTo(-yValue * speedy * 0.5);
      });
    }

    if (mc) {
      window.addEventListener("mousemove", handleParallax);
    }

    return () => {
      if (mc) {
        window.removeEventListener("mousemove", handleParallax);
      }
    };
  }, [dimensions, parallaxElements]);

  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div>
      <main ref={mount}>
       <img
          src={background}
          data-speedz="0"
          data-speedx="0.3"
          data-speedy="0.38"
          data-distance="-800"
          className="parallax bg-img"
          alt="background"
        />
        <img
          src={glow}
          data-speedz="0"
          data-speedx="0.3"
          data-speedy="0.38"
          data-distance="-800"
          className="parallax glow"
          alt="glow"
        />
        <img
          src={fog_7}
          data-speedz="0"
          data-speedx="0.195"
          data-speedy="0.32"
          data-distance="200"
          className="parallax fog-7"
          alt="fog-7"
        />
        <img
          src={mountain_10}
          data-speedz="0"
          data-speedx="0.25"
          data-speedy="0.305"
          data-distance="300"
          className="parallax mountain-10"
          alt="mountain-10"
        />
        <img
          src={fog_6}
          data-speedz="0"
          data-speedx="0.125"
          data-speedy="0.28"
          data-distance="300"
          className="parallax fog-6"
          alt="fog-6"
        />
        <img
          src={mountain_9}
          data-speedz="0.15"
          data-speedx="0.1"
          data-speedy="0.155"
          data-distance="400"
          className="parallax mountain-9"
          alt=""
        />
        <img
          src={mountain_8}
          data-speedz="0"
          data-speedx="0.16"
          data-speedy="0.11"
          data-distance="500"
          className="parallax mountain-8"
          alt=""
        />
        <img
          src={mountain_7}
          data-speedz="0"
          data-speedx="0.1"
          data-speedy="0.32"
          data-distance="200"
          className="parallax mountain-7"
          alt=""
        />
        <div data-speedz="0" data-speedx="0.7" className="text">
          <img
            src={events_font}
            alt="events-heading"
            className="events-heading"
          />
          <img src={decorator_hr_lg} alt="divider" className="divider" />
        </div>
        <div data-speedz="0" data-speedx="0.7" className="text2">
          <p>The brave men did not kill dragons the brave men rode them.</p>
        </div>
        <div data-speedx="" className="vignette"></div>
        <img
          src={mountain_6}
          data-speedz="0.05"
          data-speedx="0.065"
          data-speedy="0.05"
          data-distance="800"
          className="parallax mountain-6"
          alt="parallax mountain-6"
        />
        <img
          src={fog_4}
          data-speedz="0"
          data-speedx="0.135"
          data-speedy="0.0135"
          data-distance="1000"
          className="parallax fog-4"
          alt="parallax fog-4"
        />
        <img
          src={mountain_5}
          data-speedz="0.13"
          data-speedx="0.08"
          data-speedy="0.08"
          data-distance="1000"
          className="parallax mountain-5"
          alt="parallax mountain-5"
        />
        <img
          src={fog_3}
          data-speedz="0"
          data-speedx="0.11"
          data-speedy="0.018"
          data-distance="1200"
          className="parallax fog-3"
          alt="parallax fog-3"
        />
        <img
          src={mountain_4}
          data-speedz="0.35"
          data-speedx="0.059"
          data-speedy="0.024"
          data-distance="200"
          className="parallax mountain-4"
          alt="parallax mountain-4"
        />
        <img
          src={mountain_3}
          data-speedz="0.32"
          data-speedx="0.04"
          data-speedy="0.018"
          className="parallax mountain-3"
          alt="parallax mountain-3"
        />
        <img
          src={fog_2}
          data-speedz="0"
          data-speedx="0.15"
          data-speedy="0.0115"
          className="parallax fog-2"
          alt="parallax fog-2"
        />
        <img
          src={mountain_2}
          data-speedz="0.42"
          data-speedx="0.0235"
          data-speedy="0.013"
          className="parallax mountain-2"
          alt="parallax mountain-2"
        />
        <img
          src={mountain_1}
          data-speedz="0.53"
          data-speedx="0.027"
          data-speedy="0.018"
          className="parallax mountain-1"
          alt="parallax mountain-1"
        />
        <img
          src={fog_1}
          data-speedz="0.5"
          data-speedx="0.12"
          data-speedy="0.12"
          className="parallax fog-1"
          alt="parallax fog-1"
        />
        <img
          src={left_fireflies}
          data-speedz="0.5"
          data-speedx="0.027"
          data-speedy="0.018"
          className="parallax fireflies-left"
          alt="parallax fireflies left"
        />
        <img
          src={right_fireflies}
          data-speedz="0.5"
          data-speedx="0.04"
          data-speedy="0.018"
          className="parallax fireflies-right"
          alt="parallax fireflies right"
        />
        <img
          src={fireflies_3}
          data-speedz="0.5"
          data-speedx="0.0235"
          data-speedy="0.013"
          className="parallax fireflies-3"
          alt="parallax fireflies"
        />
        <img
          src={fireflies_4}
          data-speedz="0.5"
          data-speedx="0.059"
          data-speedy="0.024"
          className="parallax fireflies-4"
          alt="parallax fireflies"
        />
        <img
          src={fireflies_5}
          data-speedz="0.5"
          data-speedx="0.16"
          data-speedy="0.11"
          className="parallax fireflies-5"
          alt="parallax fireflies"
        />
      </main>
    </div>
  );
}

export default Mountains;
