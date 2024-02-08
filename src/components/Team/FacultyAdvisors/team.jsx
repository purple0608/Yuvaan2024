import React from "react";
import Arjab from "../../../assets/teams/Faculty/Arjab.jpg";
import David from "../../../assets/teams/Faculty/David.jpg";
import Babita from "../../../assets/teams/Faculty/Babita.jpg";
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div className="tm-main">
      <div className="et-box">
      <h1 className="title" style={{color: 'white',
          textAlign: 'center'}}>Faculty Advisors</h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={David}
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
              src={Babita}
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
              src={Arjab}
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
