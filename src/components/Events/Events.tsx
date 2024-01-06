import Cards from "./Cards/Cards";
import Mountains from "./Mountains/Mountains";
import Timeline from "./Timeline/Timeline";
import Navbar from '../Navbar/Navbar'

function Events() {
  return (
    <>
      <Navbar/>
      <Mountains />
      <Timeline />
      <Cards />
    </>
  );
}

export default Events;
