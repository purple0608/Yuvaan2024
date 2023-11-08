import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import "/src/assets/style/Mountains.css";

function Mountains() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const mount = useRef<HTMLElement | null>(null);
  const [parallaxElements, setParallaxElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (mount.current) {
      const elements: NodeListOf<HTMLElement> =
        mount.current.querySelectorAll(".parallax");
      setParallaxElements(Array.from(elements));
    }
  }, [mount]);

  useEffect(() => {
    let mc = mount.current;
    function handleParallax(e: MouseEvent) {
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

        //el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy * 0.5}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    }

    if (mc) {
      mc.addEventListener("mousemove", handleParallax);
    }

    return () => {
      if (mc) {
        mc.removeEventListener("mousemove", handleParallax);
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
          src="/src/assets/events/images_parallax/background.png"
          data-speedz="0"
          data-speedx="0.3"
          data-speedy="0.38"
          data-distance="-800"
          className="parallax bg-img"
          alt="background"
        />
        <img
          src="/src/assets/events/images_parallax/glow.png"
          data-speedz="0"
          data-speedx="0.3"
          data-speedy="0.38"
          className="parallax glow"
          alt="glow"
        />
        <img
          src="/src/assets/events/images_parallax/fog_7.png"
          data-speedz="0"
          data-speedx="0.195"
          data-speedy="0.32"
          className="parallax fog-7"
          alt="fog-7"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_10.png"
          data-speedz="0"
          data-speedx="0.25"
          data-speedy="0.305"
          className="parallax mountain-10"
          alt="mountain-10"
        />
        <img
          src="/src/assets/events/images_parallax/fog_6.png"
          data-speedz="0"
          data-speedx="0.125"
          data-speedy="0.28"
          className="parallax fog-6"
          alt="fog-6"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_9.png"
          data-speedz="0.15"
          data-speedx="0.1"
          data-speedy="0.155"
          className="parallax mountain-9"
          alt=""
        />
        <img
          src="/src/assets/events/images_parallax/mountain_8.png"
          data-speedz="0"
          data-speedx="0.16"
          data-speedy="0.11"
          className="parallax mountain-8"
          alt=""
        />
        <img
          src="/src/assets/events/images_parallax/mountain_7.png"
          data-speedz="0"
          data-speedx="0.1"
          data-speedy="0.32"
          className="parallax mountain-7"
          alt=""
        />
        <div data-speedz="0" data-speedx="0.7" className="text">
          <img
            src="/src/assets/events/clouds/events_font.png"
            alt="events-heading"
            className="events-heading"
          />
          <img
            src="/src/assets/utils/decorator-hr-lg.png"
            alt="divider"
            className="divider"
          />
        </div>
        <div data-speedz="0" data-speedx="0.7" className="text2">
          <p>The brave men did not kill dragons the brave men rode them.</p>
        </div>
        <div data-speedx="" className="vignette"></div>
        <img
          src="/src/assets/events/images_parallax/mountain_6.png"
          data-speedz="0.05"
          data-speedx="0.065"
          data-speedy="0.05"
          className="parallax mountain-6"
          alt="parallax mountain-6"
        />
        <img
          src="/src/assets/events/images_parallax/fog_4.png"
          data-speedz="0"
          data-speedx="0.135"
          data-speedy="0.0135"
          className="parallax fog-4"
          alt="parallax fog-4"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_5.png"
          data-speedz="0.13"
          data-speedx="0.08"
          data-speedy="0.08"
          className="parallax mountain-5"
          alt="parallax mountain-5"
        />
        <img
          src="/src/assets/events/images_parallax/fog_3.png"
          data-speedz="0"
          data-speedx="0.11"
          data-speedy="0.018"
          className="parallax fog-3"
          alt="parallax fog-3"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_4.png"
          data-speedz="0.35"
          data-speedx="0.059"
          data-speedy="0.024"
          className="parallax mountain-4"
          alt="parallax mountain-4"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_3.png"
          data-speedz="0.32"
          data-speedx="0.04"
          data-speedy="0.018"
          className="parallax mountain-3"
          alt="parallax mountain-3"
        />
        <img
          src="/src/assets/events/images_parallax/fog_2.png"
          data-speedz="0"
          data-speedx="0.15"
          data-speedy="0.0115"
          className="parallax fog-2"
          alt="parallax fog-2"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_2.png"
          data-speedz="0.42"
          data-speedx="0.0235"
          data-speedy="0.013"
          className="parallax mountain-2"
          alt="parallax mountain-2"
        />
        <img
          src="/src/assets/events/images_parallax/mountain_1.png"
          data-speedz="0.53"
          data-speedx="0.027"
          data-speedy="0.018"
          className="parallax mountain-1"
          alt="parallax mountain-1"
        />
        <img
          src="/src/assets/events/images_parallax/fog_1.png"
          data-speedz="0.5"
          data-speedx="0.12"
          data-speedy="0.12"
          className="parallax fog-1"
          alt="parallax fog-1"
        />
        <img
          src="/src/assets/events/images_parallax/left_fireflies.png"
          data-speedz="0.5"
          data-speedx="0.027"
          data-speedy="0.018"
          className="parallax fireflies-left"
          alt="parallax fireflies left"
        />
        <img
          src="/src/assets/events/images_parallax/right_fireflies.png"
          data-speedz="0.5"
          data-speedx="0.04"
          data-speedy="0.018"
          className="parallax fireflies-right"
          alt="parallax fireflies right"
        />
        <img
          src="/src/assets/events/images_parallax/fireflies_3.png"
          data-speedz="0.5"
          data-speedx="0.0235"
          data-speedy="0.013"
          className="parallax fireflies-3"
          alt="parallax fireflies"
        />
        <img
          src="/src/assets/events/images_parallax/fireflies_4.png"
          data-speedz="0.5"
          data-speedx="0.059"
          data-speedy="0.024"
          className="parallax fireflies-4"
          alt="parallax fireflies"
        />
        <img
          src="/src/assets/events/images_parallax/fireflies_5.png"
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
