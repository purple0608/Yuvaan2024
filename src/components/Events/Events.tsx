import React, { useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import Mountains from "./Mountains/Mountains";
import usePreventZoom from "./../../assets/utils/PreventZoom.ts";
import Loader from "/src/components/Loader/Loader";

function Events() {
  usePreventZoom();
  const isMobile = window.innerWidth <= 768;
  const goToTimeline = () => {
    window.scrollTo({
      top: document.getElementById("events-timeline").offsetTop + 100,
      behavior: "smooth",
    });
  };
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
    <div className="events-parent">
      <Mountains />
          <Cards />
          <button onClick={()=>{goToTimeline()}} className="event-global-timeline-button">
          {isMobile ?
              <svg class="arrow up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="5 0 50 80" xml:space="preserve">
              <polyline fill="none" stroke="#c89b3c" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" points="0.375, 35.375 28.375, 0.375 58.67, 35.375 " />
              </svg>:"Timeline"}
      </button>
    </div>
  );
}

export default Events;
