import { useEffect, useLayoutEffect, useState, useRef } from "react";
import "../../assets/sponsors/App.css";
import Card1 from "./card";
import apl from "../../assets/sponsors/image/apl1.png";
import oil from "../../assets/sponsors/image/oil india.png";
import sbi from "../../assets/sponsors/image/SBI1.jpg";
import baroda from "../../assets/sponsors/image/bankOfBaroda1.png";
import fatBelly from "../../assets/sponsors/image/fatBelly1.png";
import pizzaHut from "../../assets/sponsors/image/pizzahut1.png";
import bingo from "../../assets/sponsors/image/bingo1.png";
import gail from "../../assets/sponsors/image/gail1.png";
import innovation from "../../assets/sponsors/image/innovation1.png";
import amtron from "../../assets/sponsors/image/amtron1.jpg";
import tcs from "../../assets/sponsors/image/tcs1.png";
import pragnews from "../../assets/sponsors/image/pragNews1.png";
import gplus from "../../assets/sponsors/image/gplus1.png";
import Nxm from "../../assets/sponsors/image/9xm1.png";
import zoom from "../../assets/sponsors/image/zoom1.jpg";
import royal from "../../assets/sponsors/image/royal1.png";
import downline from "/src/assets/utils/decorator-hr-lg.png";
import sponsors_heading from "../../assets/sponsors/image/sponsors.png";
import sponsors_pdf from "./sponsors_pdf.tsx";
import brochure from "./../../assets/sponsors/image/sponsors-pdf/Yuvaan 2024 Sponsor Brochure Single Page (4).pdf";
import ImageSlider from "./Sponsors_ImageSlider.tsx";
function useDebounce(func, delay) {
  const [timer, setTimer] = useState();

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer);
    setTimer(newTimer);
  }) as Function;

  return debouncedFunction;
}

function Sponsors() {
  const mount = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useDebounce(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useLayoutEffect(() => {
    const sponsorHex = mount.current?.querySelector(".sponsors-hex");

    if (dimensions.width <= 1280) {
      // Add your specific responsive adjustments here
      sponsorHex?.classList.add("responsive-hex");
    } else {
      sponsorHex?.classList.remove("responsive-hex");
    }
  }, [dimensions]);

  return (
    <div>
      <div className="sponsors-wrapper" ref={mount}>
        <div className="sponsors-content">
          <header className="sponsors-header">
            <div className="sponsors-layers">
              <div className="sponsors-layer-title">
                <div className="sponsors-subtitle">
                  <img
                    src={sponsors_heading}
                    alt="sponsors heading"
                    className="sponsors_heading"
                  />
                  <img
                    src={downline}
                    alt="downline"
                    className="sponsors_downline"
                  />
                </div>
              </div>
              <div className="sponsors-layer sponsors-layer-base"></div>
              <div className="sponsors-layer sponsors-layer-middle"></div>
              <div className="sponsors-layer sponsors-layer-front"></div>
            </div>
          </header>
          <ImageSlider images={sponsors_pdf} />
          <div className="sponsors-button">
            <a
              href={brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsors-register-button"
            >
              Brochure
            </a>
          </div>
          <div className="sponsor">
            <div className="sponsors-hex">
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Title Sponsor</h3>
                <div className="sponsors-image">
                  <Card1
                    image={oil}
                    imageAlt="Oil India Limited"
                    title="Title Sponsor"
                    class="sponsors-titleCard"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Banking Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={sbi}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={baroda}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Food Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={fatBelly}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={pizzaHut}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={bingo}
                    imageAlt="gplus"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Energy Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={apl}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={gail}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Tech Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={innovation}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={amtron}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={tcs}
                    imageAlt="gplus"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">Media Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={pragnews}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={gplus}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={Nxm}
                    imageAlt="gplus"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
              <article className="sponsors-article">
                <h3 className="sponsors-article-title">AutoMobile Partner</h3>
                <div className="sponsors-image">
                  <Card1
                    image={zoom}
                    imageAlt="SBI"
                    title="Banking Partner"
                    class="sponsors-card"
                  />
                  <Card1
                    image={royal}
                    imageAlt="Prag News"
                    title="Media Partner"
                    class="sponsors-card"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
