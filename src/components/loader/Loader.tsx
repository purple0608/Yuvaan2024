import React, { useEffect } from "react";
import "/src/assets/loader/loader.css";
type Props = {};

const YourComponent = () => {
  return (
    <div className="loading-bar-vasu" role="presentation" aria-hidden="true">
      <img src="/src/assets/contact/images/loading-bar.png" alt="Loading..." />
    </div>
  );
};

export default YourComponent;
