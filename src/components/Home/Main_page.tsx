import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/src/assets/main_page/main_page.css';
import text from '/src/assets/main_page/images/text2.png';
import video from '/src/assets/main_page/images/background_video.mp4';
import Navbar from '/src/components/Navbar/Navbar';
import Page2 from '/src/components/Home/Component1/Page2';
import MyVideo from './Component1/MyVideo';
import MainMap from './OpeningMap/MainMap';
import MainSlider from './Slider/MainSlider';

function Main_page() {


  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Navbar className={isClicked ? 'navbar' : 'navbar'} />
      <div className="fp-wrapper" ref={wrapperRef}>
        <div className="fp-content" ref={contentRef}>

          <div className="fp-wrapper">
            <div className="fp-video-container">
              <MyVideo />

              <div className="fp-centered-content">
                <img src={text} alt="Centered Image" className="fp-centered-image" />
              </div>

            </div>
          </div>

        
          <MainMap />
          <MainSlider />
        </div>
      </div>
    </>
  );
}

export default Main_page;
