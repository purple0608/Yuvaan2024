import { useEffect } from 'react';
import { TweenLite } from 'gsap';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/coverflowEffect';

interface TweenedElement extends HTMLElement {
  Tween?: any; // Define the Tween property here
}

const PreviewEffect: React.FC = () => {
  useEffect(() => {
    const total = 25;
    const container = document.getElementById("container");
    const w = window.innerWidth;
    const h = window.innerHeight;
    const Tweens: TweenedElement[] = [];
  
    function Anim(elm: TweenedElement) {
      const xEnd = R(w);
      const yEnd = R(h);
  
      elm.Tween = TweenLite.to(elm, R(50) + 20, {
        x: xEnd,
        y: yEnd,
        opacity: R(1),
        scale: R(1) + 0.5,
        delay: R(1),
        onComplete: function () {
          TweenLite.set(elm, { x: R(w), y: R(h), opacity: 0 });
          Anim(elm);
        },
      });
    }
  
    for (let i = total; i--; ) {
      const Div = document.createElement("div") as TweenedElement;
      Div.Tween = null; // Initialize Tween property
      TweenLite.set(Div, {
        attr: { className: "dot" },
        x: R(w),
        y: R(h),
        opacity: 0,
      });
      container?.appendChild(Div);
      Anim(Div);
      Tweens.push(Div);
    }
  
    for (let i = total; i--; ) {
      (Tweens[i] as TweenedElement).Tween.play();
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
  
  return null;
};

export default PreviewEffect;
