import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "/src/assets/events/Cards.css";
import { Data, EventData } from "../../../assets/events/data";
import { debounce } from "../../../assets/utils/Debounce.ts";
import Card from "./Card.tsx";
import { useGSAP } from "@gsap/react";
import Map from "../Timeline/Map";

function Cards() {
  const data: EventData[] = Data;
  gsap.registerPlugin(ScrollTrigger);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 50));
    return () =>
      window.removeEventListener("resize", debounce(handleResize, 50));
  }, []);

  const [heroData, setHeroData] = useState(data[0]);
  const pinWrap = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLDivElement | null>();
  const tl = useRef<GSAPTimeline>();

  const handleHeroChange = (i: number) => {
    console.log("hero changing", i);
    if (i - 1 >= 0) {
      setHeroData(data[i - 1]);
    }
  };

  useGSAP(
    () => {
      const showSetting = {
        rotateY: 0,
        width: dimensions.width,
        height: dimensions.height,
        opacity: 1,
      };
      const showSettingSpecial = (i: number) => {
        return {
          rotateY: 0,
          width: dimensions.width,
          height: dimensions.height,
          opacity: 1,
          onReverseComplete: handleHeroChange,
          onReverseCompleteParams: [i - 1],
        };
      };

      const hideSetting = (i: number) => {
        return {
          rotateY: 90,
          width: 600,
          height: 600,
          opacity: 0,
          onComplete: handleHeroChange,
          onCompleteParams: [i],
        };
      };

      const little_heroes = hero.current?.children[0].children;
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          pin: pinWrap.current,
          start: "top top",
          end: "+=20000",
          scrub: true,
          snap: {
            snapTo: [0.07, 0.18, 0.3, 0.42, 0.54, 0.66, 0.77, 0.88, 1],
            duration: 0.5,
            delay: 0,
            ease: "power1.inOut",
          },
        },
      });
      tl.current.data = heroData;
      for (let i = 1; i <= data.length; i++) {
        tl.current
          .addLabel("start-" + i)
          .to(hero.current!, showSettingSpecial(i))
          .addLabel("display-" + i);
        for (let j = 0; j < little_heroes?.length!; j++) {
          tl.current.to(little_heroes![j], { opacity: 1 }, "display-" + i);
        }
        if (i != data.length) {
          tl.current.to(hero.current!, showSetting).addLabel("end-" + i);
          for (let j = 0; j < little_heroes?.length!; j++) {
            tl.current.to(little_heroes![j], { opacity: 0 }, "end-" + i);
          }

          tl.current.to(hero.current!, hideSetting(i + 1));
        }
      }
    },
    { scope: hero },
  );

  return (
    <>
      <Map timeline={tl} />
      <div className="event-pinWrapper" ref={pinWrap}>
        <div
          id="hero"
          className="event-hero"
          ref={hero as MutableRefObject<HTMLDivElement>}
        >
          <Card data={heroData} />
        </div>
      </div>
    </>
  );
}
export default Cards;
