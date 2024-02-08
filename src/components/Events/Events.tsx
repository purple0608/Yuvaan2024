import Cards from "./Cards/Cards";
import Mountains from "./Mountains/Mountains";
import usePreventZoom from "./../../assets/utils/PreventZoom.ts";

function Events() {
    usePreventZoom();
    const isMobile = window.innerWidth <= 768;
    const goToTimeline = () => {
        window.scrollTo({top:document.getElementById("events-timeline").offsetTop+100, behavior: 'smooth'});
    }
  return (
    <div className="events-parent">
      <Mountains />
          <Cards />
          <button onClick={()=>{goToTimeline()}} className={isMobile ? "event-void":"event-global-timeline-button"}>
        Timeline
      </button>
    </div>
  );
}

export default Events;
