import React from "react";

import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div className="tm-main">
      <div className="et-box">
        <h1 className="title" style={{ color: "white", textAlign: "center" }}>
          Student Gymkhana Council
        </h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/SGC/AP.jpg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Ashutosh Pandey <br />
              <span><b>President</b></span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/SGC/Bhanu%20Prakash.jpeg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Bhanu Prakash <br />
              <span><b>Vice President</b></span>
            </h2>
          </div>
        </div>
        <div className="et-card">
            <div className="et-imgBox">
              <img
                src="https://d1y50e2lm5xcwm.cloudfront.net/Team/Faculty/20210228_144733-01.jpg"
                alt="some image"
              />
            </div>
            <div className="et-details">
              <h2>
                V. Kethareswaran <br />
                <span><b>Advisor</b></span>
              </h2>
            </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/SGC/Pari%20Tiwari.jpeg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Pari Tiwari <br />
              <span><b>General Secretary</b> - </span>
          
              <span>Cultural Board</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
