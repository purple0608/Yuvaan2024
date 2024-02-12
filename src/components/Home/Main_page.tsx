import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/assets/main_page/main_page.css";


import video from "/src/assets/main_page/images/background_video.mp4";
import Navbar from "/src/components/Navbar/Navbar";
import Page2 from "/src/components/Home/Component1/Page2";
import MyVideo from "./Component1/MyVideo";
import MainMap from "./OpeningMap/MainMap";
import MainSlider from "./Slider/MainSlider";
import Loader from "/src/components/loader/Loader";

function Main_page() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar className={isClicked ? "navbar" : "navbar"} />
      <div className="fp-wrapper" ref={wrapperRef}>
        <div className="fp-content" ref={contentRef}>
          <div className="fp-wrapper">
            <div className="fp-video-container">
              <MyVideo />
              <div className="fp-centered-above">
                <img
                  src={presents}
                  alt="Centered Image"
                  className="fp-centered-image"
                />
              </div>
              <div className="fp-centered-content">
                <img
                  src={yuvaan}
                  alt="Centered Image"
                  className="fp-centered-image"
                />
              </div>
              <div className="fp-centered-below">
                <img
                  src={march}
                  alt="Centered Image"
                  className="fp-centered-image"
                />
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

// import React, { useState, useEffect } from "react";
// import Navbar from "/src/components/Navbar/Navbar";
// import MyVideo from "./Component1/MyVideo";
// import MainMap from "./OpeningMap/MainMap";
// import MainSlider from "./Slider/MainSlider";
// import text from "/src/assets/main_page/images/text2.png";
// import text1 from "/src/assets/main_page/images/text1.png";
// import text3 from "/src/assets/main_page/images/text3.png";
// import Loader from "/src/components/Loader/Loader";

// function Main_page() {
//   const [loading, setLoading] = useState(true);

//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       // Simulate loading time
//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       // Set loading to false after loading time
//       setLoading(false);
//     };

//     // Call the asynchronous operation
//     loadData();
//   }, []);

//   if (loading) {
//     // Display the loader while loading
//     return <Loader />;
//   }

//   return (
//     <>
//       <Navbar />
//       // Render the main page content once loading is complete
//       <div className="fp-wrapper">
//         <div className="fp-content">
//           <div className="fp-wrapper">
//             <div className="fp-video-container">
//               <MyVideo />
//               <div className="fp-centered-above">
//                 <img
//                   src={text1}
//                   alt="Centered Image"
//                   className="fp-centered-image"
//                 />
//               </div>
//               <div className="fp-centered-content">
//                 <img
//                   src={text}
//                   alt="Centered Image"
//                   className="fp-centered-image"
//                 />
//               </div>
//               <div className="fp-centered-below">
//                 <img
//                   src={text3}
//                   alt="Centered Image"
//                   className="fp-centered-image"
//                 />
//               </div>
//             </div>
//           </div>
//           <MainMap />
//           <MainSlider />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Main_page;
