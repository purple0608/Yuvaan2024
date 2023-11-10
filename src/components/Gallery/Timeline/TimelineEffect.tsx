import React from "react";

export const TimelineEffect: React.FC = ({}) => {
  const selectors = {
    id: document.getElementById("timeline-1"),
    items: document.querySelectorAll(
      ".timeline-item"
    ) as NodeListOf<HTMLElement>,
    activeClass: "timeline-item--active",
    img: ".timeline__img",
  };

  if (selectors.id) {
    selectors.items[0].classList.add(selectors.activeClass);
    selectors.id.style.backgroundImage =
      "url(" +
      (selectors.items[0].querySelector(selectors.img)?.getAttribute("src") ||
        "") +
      ")";
  }

  const itemLength = selectors.items.length;

  window.addEventListener("scroll", function () {
    const pos = window.scrollY;

    selectors.items.forEach(function (item, i) {
      const min = item.offsetTop;
      const max = item.offsetHeight + item.offsetTop;

      if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
        selectors.items.forEach(function (item) {
          item.classList.remove(selectors.activeClass);
        });

        if (selectors.id) {
          selectors.id.style.backgroundImage =
            "url(" +
            (selectors.items[itemLength - 1]
              .querySelector(selectors.img)
              ?.getAttribute("src") || "") +
            ")";
        }

        selectors.items[itemLength - 1].classList.add(selectors.activeClass);
      } else if (pos <= max - 40 && pos >= min) {
        if (selectors.id) {
          selectors.id.style.backgroundImage =
            "url(" +
            (item.querySelector(selectors.img)?.getAttribute("src") || "") +
            ")";
        }

        selectors.items.forEach(function (item) {
          item.classList.remove(selectors.activeClass);
        });

        item.classList.add(selectors.activeClass);
      }
    });
  });

  return null;
};
