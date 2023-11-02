export const PreviewEffect = () => {
  var total = 25,
    container = document.getElementById("container"),
    w = window.innerWidth,
    h = window.innerHeight,
    Tweens = [],
    SPs = 1;

  function Anim(elm) {
    var xEnd = R(w);
    var yEnd = R(h);

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

  for (var i = total; i--; ) {
    var Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(w),
      y: R(h),
      opacity: 0,
    });
    container.appendChild(Div);
    Anim(Div);
    Tweens.push(Div);
  }

  for (var i = total; i--; ) {
    Tweens[i].Tween.play();
  }

  function R(max) {
    return Math.random() * max;
  }

  var swiper = new Swiper(".mySwiper", {
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

};
