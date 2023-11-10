import React, { useEffect } from "react";
import { TweenLite, Power4 } from "gsap";

type ElementWithTween = HTMLElement & {
  Tween?: TweenLite;
};

const Fireflies: React.FC = () => {
  const total: number = 25;
  const container = document.getElementById("container");
  const w = window.innerWidth;
  const h = window.innerHeight;
  const Tweens: ElementWithTween[] = [];

  function Anim(elm: ElementWithTween) {
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
      ease: Power4.easeOut, // Example easing function, use the one you need
    });
  }

  for (let i = total; i--; ) {
    const Div = document.createElement("div") as ElementWithTween;
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(w),
      y: R(h),
      opacity: 0,
    });
    container?.appendChild(Div);
    Anim(Div);
    Tweens.push(Div);
  }

  for (let i = total; i--; ) {
    const Div = document.createElement("div") as ElementWithTween;
    Div.Tween = undefined; // Ensure it's initialized
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(w),
      y: R(h),
      opacity: 0,
    });
    container?.appendChild(Div);
    Anim(Div);
    Tweens.push(Div);
  }

  function R(max: number) {
    return Math.random() * max;
  }

  

  return null; // Replace with your desired JSX content
};

export default Fireflies;
