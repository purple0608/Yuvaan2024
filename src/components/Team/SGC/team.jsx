import React from "react";
import Ashutosh from "../../../assets/teams/SGC/AP.jpg";
import Bhanu from "../../../assets/teams/SGC/Bhanu Prakash.jpeg";
import Pari from "../../../assets/teams/SGC/Pari Tiwari.jpeg";
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div className="tm-main">
      <div className="et-box">
      <h1 className="title" style={{color: 'white',
          textAlign: 'center'}}>Student Gymkhana Council</h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Ashutosh}
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
              src={Bhanu}
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
              src={Pari}
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
