import React, { useEffect } from "react";
import gsap from 'gsap';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/coverflowEffect';
import { EventImgData } from "../../assets/EventImgData";
import EventItem from "./Item";
import './Preview.css'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';


const Preview: React.FC = () => {
  useEffect(() => {
    const total = 25;
    const container = document.getElementById("container");
    const w = window.innerWidth;
    const h = window.innerHeight;

    function Anim(elm: HTMLElement) {
      const xEnd = R(w);
      const yEnd = R(h);

      gsap.to(elm, {
        x: xEnd,
        y: yEnd,
        opacity: R(1),
        scale: R(1) + 0.5,
        delay: R(1),
        onComplete: function () {
          gsap.set(elm, { x: R(w), y: R(h), opacity: 0 });
          Anim(elm);
        },
      });
    }

    for (let i = total; i--; ) {
      const Div = document.createElement("div");
      gsap.set(Div, {
        attr: { className: "dot" },
        x: R(w),
        y: R(h),
        opacity: 0,
      });
      container?.appendChild(Div);
      Anim(Div);
    }

    function R(max: number) {
      return Math.random() * max;
    }

    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
    });

  }, []);

  return (
    <div className="preview-container">
      <div id="container"> </div>
      <div className="clouds">
        <div className="clouds-1"></div>
        <div className="clouds-2"></div>
        <div className="clouds-3"></div>
      </div>
      <h1 className="preview-header">Past Events</h1>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {EventImgData.map((item) => {
            return <EventItem {...item} key={item.id} />;
          })} 
        </div>
      </div> 
    </div>
  );
};

export default Preview;
