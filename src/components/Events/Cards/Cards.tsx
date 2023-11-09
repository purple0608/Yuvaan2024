import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "/src/assets/events/Cards.css";
import { Data, EventData } from "../../../assets/events/data";


function debounce(fn: Function, ms: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

function Cards() {
  const data: EventData[] = Data;
  gsap.registerPlugin(ScrollTrigger);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [heroData, setHeroData] = useState(data[0]);
  const page = useRef<HTMLDivElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLDivElement | null>();

  const tl = useRef<GSAPTimeline>();

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  const handleHeroChange = (i: number) => {
  		if(i-1>=0){
    			setHeroData(Data[i-1]);
  		}
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 300));
    return () =>
      window.removeEventListener("resize", debounce(handleResize, 300));
  }, []);

  useLayoutEffect(() => {
    const little_heroes = hero.current?.children;
    const showSetting = {
      rotateY: 0,
      width: dimensions.width,
      height: dimensions.height,
      opacity: 1,
    };
    const showSettingSpecial = (i: number) => {return {
      rotateY: 0,
      width: dimensions.width,
      height: dimensions.height,
      opacity: 1,
      onReverseComplete: handleHeroChange,
      onReverseCompleteParams: [i-1]
    	};
    }

    const hideSetting = (i: number) =>{ return {
      rotateY: 90,
      width: 600,
      height: 600,
      opacity: 0,
      onComplete: handleHeroChange,
      onCompleteParams: [i]
    };
    }

    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          pin: pinWrap.current,
          start: "top top",
          end: "+=12000",
          scrub: true,
          markers: true,
          snap: {
            snapTo: [0.15, 0.5, 0.85],
            duration: 1,
            delay: 0.001,
            ease: "power1.inOut",
          },
        },
      });
      tl.current.data = heroData;
	
      
      for (let i = 1; i < 4; i++) {
        tl.current
          .addLabel("start-" + i)
          .set(hero.current!, {
            css: {
              backgroundImage: () => {
		return "url(/src/assets/events/images_cards/hero" + i + ".jpg)";
              },
            },
          })
          .to(hero.current!, showSettingSpecial(i))
          .addLabel("display-" + i)
          //.to(hero.current!, showSetting);
        for (let j = 0; j < little_heroes?.length!; j++) {
          tl.current.to(little_heroes![j], { opacity: 1 }, "display-" + i);
        }
        tl.current.to(hero.current!, showSetting).addLabel("end-" + i);
        for (let j = 0; j < little_heroes?.length!; j++) {
          tl.current.to(little_heroes![j], { opacity: 0 }, "end-" + i);
        }
        tl.current.to(hero.current!, hideSetting(i+1));
      }
    }, hero.current!);

    return () => ctx.revert();
  }, [dimensions]);

  return (
      <div className="page" ref={page}>
        <div className="pinWrapper" ref={pinWrap}>
          <center>
            <div
              className="card"
              id="hero"
              ref={hero as MutableRefObject<HTMLDivElement>}
            >
              <div className="titleBox">
              <p className="title"> {heroData.title} </p>
              <img className="sword" src="/src/assets/events/images_cards/sword.png" alt="sword"/>
              </div>
              <div className="grid description">
                <div className="grid-item logo" />
                <div className="grid-item data">
                  <p className="desc-header"> Date </p>
                  <p className="date">{heroData.date}</p>
                </div>
                <div className="grid-item logo" />
                <div className="grid-item data">
                  <p className="desc-header"> Time </p>
                  <p className="time">{heroData.time} </p>
                </div>
                <div className="grid-item logo" />
                <div className="grid-item data">
                  <p className="desc-header"> Venue </p>
                  <p className="venue">{heroData.venue}</p>
                </div>
                <div className="grid-item data full">
                  <p className="info">{heroData.info}</p>
                </div>
            </div>
            <div className="register-wrapper">
              <button type="button" className="register-button">
                Register
              </button>
            </div>
            <img
              src="/src/assets/utils/decorator-hr.png"
              className="divider"
              alt="scroll_down"
            />
          </div>
        </center>
      </div>
      <div className="space" />
    </div>
  );
}
export default Cards;
