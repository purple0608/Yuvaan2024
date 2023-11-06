import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timeline/Timeline";
import Preview from "./components/Preview/Preview";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <Navbar className={isClicked ? "navbar" : "navbar"} />
      {isClicked ? <Timeline /> : <Preview />}
      {isClicked ? (
        ""
      ) : (
        <button onClick={handleButtonClick} className="btn view-btn">
          View More
        </button>
      )}
    </>
  );
}

export default App;
