import React, { useState, useEffect, Suspense, lazy } from "react";
import Cards from "./Cards/Cards";
import usePreventZoom from "./../../assets/utils/PreventZoom.ts";
import Loader from "/src/components/LoadingPage/Loader";
import Mountains from "./Mountains/Mountains";

const event = new Event('onLoaderClose');

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
        await new Promise((resolve) => setTimeout(resolve, 3800));
        setLoading(false);
        window.dispatchEvent(event);

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
              <svg className="arrow up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="5 0 50 80" xmlSpace="preserve">
              <polyline fill="none" stroke="#c89b3c" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" points="0.375, 35.375 28.375, 0.375 58.67, 35.375 " />
              </svg>:"Timeline"}
      </button>
            </div>
  );
}

export default Events;
