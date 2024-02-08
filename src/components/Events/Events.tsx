import Cards from "./Cards/Cards";
import Mountains from "./Mountains/Mountains";
import usePreventZoom from "./../../assets/utils/PreventZoom.ts";

function Events() {
  usePreventZoom();
  return (
    <div className="events-parent">
      <Mountains />
      <Cards />
    </div>
  );
}

export default Events;
