import React, { useEffect } from 'react';

const NavBarEffect: React.FC = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");

    function activeLink(event: Event) {
      list.forEach((item) => item.classList.remove("active"));
      const clickedListItem = event.currentTarget as HTMLElement;
      clickedListItem.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);

  return null;
};

export default NavBarEffect;
