import { useLayoutEffect, useRef } from "react";
import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/assets/main_page/main_page.css";
import video from "/src/assets/main_page/images/Mountain.mp4"





const Page2: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://cdn-hogwartslegacy.warnerbrosgames.com/home/bg-bottom.jpg'
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
    <div className="fp-page-container">
      <div className="fp-small-image-container">
        <img
          src="/src/assets/main_page/images/mm.jpeg"
          alt="Small Image"
          className="fp-small-image"
        />
      </div>
      <div className="fp-cover-image-sequence">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? 'fp-active' : ''}
          />
        ))}
      </div>
    </div>
  </>
  );
};

export default Page2;
