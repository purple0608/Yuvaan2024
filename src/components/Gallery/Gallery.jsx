import Navbar from "../Navbar/Navbar";
import Timeline from "./Timeline/Timeline";
import Preview from "./Preview/Preview";
import { useState } from "react";
import "/src/assets/gallery/Gallery.css";

function Gallery() {
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

export default Gallery;
