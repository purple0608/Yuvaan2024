import Cards from "./Cards/Cards";
import Mountains from "./Mountains/Mountains";
import Map from "./Timeline/Map";

function Events() {
  const isMobile = window.innerWidth <= 768; 
  console.log(isMobile);
  return (
    <>
      <Mountains />
      {!isMobile && <Map />}
      <Cards />
    </>
  );
}

export default Events;
