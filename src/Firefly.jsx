import { TweenLite, Power4 } from "gsap";

const Fireflies = () => {
  const total = 10;
  const container = document.getElementById("container");
  const Tweens = [];

  function Anim(elm) {
    const xEnd = R(window.innerWidth * 0.75);
    const yEnd = R(window.innerHeight * 0.75);

    elm.Tween = TweenLite.to(elm, 50, {
      x: xEnd,
      y: yEnd,
      opacity: 0.75,
      scale: 0.75,
      delay: R(1),
      onComplete: function () {
        TweenLite.set(elm, {
          x: R(window.innerWidth * 0.75),
          y: R(window.innerHeight * 0.75),
          opacity: 0,
        });
        Anim(elm);
      },
      ease: Power4.easeOut, 
    });
  }

  for (let i = total; i--; ) {
    const Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(window.innerWidth * 0.75),
      y: R(window.innerHeight),
      opacity: 0,
    });
    container?.appendChild(Div);
    Anim(Div);
    Tweens.push(Div);
  }

  function R(max) {
    return Math.random() * max;
  }

  return <div id="container" />;
};

export default Fireflies;
