import React from "react";

import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div className="tm-main">
      <div className="et-box">
        <h1 className="title" style={{ color: "white", textAlign: "center" }}>
          Faculty Advisors
        </h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/Faculty/David.jpg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Dr. L. David Lal <br />
              <span></span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/Faculty/Babita.jpg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
                Dr. Babita Jajodia <br />
              <span></span>
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
                <span></span>
              </h2>
            </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://d1y50e2lm5xcwm.cloudfront.net/Team/Faculty/Arjab.jpg"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Dr. Arjab Roy <br />
              <span></span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
