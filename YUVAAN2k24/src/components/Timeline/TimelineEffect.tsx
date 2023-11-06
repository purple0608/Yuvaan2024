import React, { useEffect } from "react";

const TimelineEffect: React.FC = () => {
  useEffect(() => {
    var selectors = {
      id: document.getElementById("timeline-1"),
      items: document.querySelectorAll(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };

    selectors.items[0].classList.add(selectors.activeClass);
    selectors.id.style.backgroundImage =
      "url(" +
      (selectors.items[0].querySelector(selectors.img) as HTMLImageElement).getAttribute("src") +
      ")";

    var itemLength = selectors.items.length;

    window.addEventListener("scroll", function () {
      var max, min;
      var pos = window.scrollY;

      selectors.items.forEach(function (item, i) {
        min = item.offsetTop;
        max = item.offsetHeight + item.offsetTop;

        if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
          selectors.items.forEach(function (item) {
            item.classList.remove(selectors.activeClass);
          });

          selectors.id.style.backgroundImage =
            "url(" +
            (selectors.items[itemLength - 1]
              .querySelector(selectors.img) as HTMLImageElement).getAttribute("src") +
            ")";

          selectors.items[itemLength - 1].classList.add(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.style.backgroundImage =
            "url(" +
            (item.querySelector(selectors.img) as HTMLImageElement).getAttribute("src") +
            ")";
          selectors.items.forEach(function (item) {
            item.classList.remove(selectors.activeClass);
          });
          item.classList.add(selectors.activeClass);
        }
      });
    });
  }, []);

  return null;
};

export default TimelineEffect;
