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
      await new Promise((resolve) => setTimeout(resolve, 4000));
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
      <button
        onClick={() => {
          goToTimeline();
        }}
        className={isMobile ? "event-void" : "event-global-timeline-button"}
      >
        Timeline
      </button>
    </div>
  );
}

export default Events;
