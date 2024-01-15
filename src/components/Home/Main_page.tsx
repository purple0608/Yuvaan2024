import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/src/assets/main_page/main_page.css';
import text from '/src/assets/main_page/images/text2.png';
import video from '/src/assets/main_page/images/background_video.mp4';
// import Navbar from '/src/components/Navbar/Navbar';
import Page2 from '/src/components/Home/Component1/Page2';
import MyVideo from './Component1/MyVideo';



function Main_page() {
  

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isClicked, setIsClicked] = useState(false);

 

  return (
    <>
      {/* <Navbar className={isClicked ? 'navbar' : 'navbar'} /> */}
      <div className="wrapper" ref={wrapperRef}>
        <div className="content" ref={contentRef}>
          
            <div className="wrapper">
              <div className="video-container">
                <MyVideo />

                <div className="centered-content">
                  <img src={text} alt="Centered Image" className="centered-image" />
                </div>
                
              </div>
            </div>
          
        </div>
      </div>
      <Page2 />
    </>
  );
}

export default Main_page;
