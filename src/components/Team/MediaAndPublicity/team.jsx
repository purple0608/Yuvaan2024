import React from "react";
import Roshan from "../../../assets/teams/MnP/Roshan Raj.jpg";
import Sunny from "../../../assets/teams/MnP/Sunny Mallick.jpg";
import Aditya from "../../../assets/teams/MnP/Aditya Pratap.jpg";
import Banoth from "../../../assets/teams/MnP/Banoth Sai Siddartha.jpg";
import Hardik from "../../../assets/teams/MnP/Hardik Srivastav.jpg";
import Ishaan from "../../../assets/teams/MnP/Ishaan Das.jpg";
import Khushi from "../../../assets/teams/MnP/Khushi Mandal.jpg";
import Kiran from "../../../assets/teams/MnP/Kiran Kr Rout.jpg";
import Rashi from "../../../assets/teams/MnP/Rashi Tiwari.jpg";
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div>
      <div className="et-box">
        <h1 className="title" style={{ color: "white", textAlign: "center" }}>
          Media And Publicity
        </h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Roshan} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Roshan Raj <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Sunny} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Sunny Mallick <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Aditya} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Aditya Pratap <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Banoth} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Banoth Sai Siddartha <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Hardik} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Hardik Srivastav <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Ishaan} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Ishaan Das <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Khushi} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Khushi Mandal <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Kiran} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Kiran Kr Rout <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Rashi} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Rashi Tiwari <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
