import React from "react";
import Prateek from "../../../assets/teams/pcr/Prateek.jpg";
import Tashyab from "../../../assets/teams/pcr/Tashyab Raj.jpg";
import Akshat from "../../../assets/teams/pcr/Akshat Lohia.jpg";
import Arya from "../../../assets/teams/pcr/Arya Sahu.jpg";
import Deepanika from "../../../assets/teams/pcr/Deepanika Gupta.jpg";
import Mukund from "../../../assets/teams/pcr/Mukund.jpg";
import Nikhil from "../../../assets/teams/pcr/Nikhil Vasudevan.jpg";
import Nisha from "../../../assets/teams/pcr/Nisha.jpg";
import Prakriti from "../../../assets/teams/pcr/Prakriti Rani.jpg";
import Srishty from "../../../assets/teams/pcr/Srishty.jpg";
import Vamika from "../../../assets/teams/pcr/Vamika.jpg";
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div className="tm-main">
      <div className="et-box">
        <h1 className="title" style={{ color: "white", textAlign: "center" }}>
          Public And Relation
        </h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Prateek} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Prateek <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Tashyab} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Tashyab Raj <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Akshat} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Akshat Lohia <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Arya} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Arya Sahu <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Deepanika} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Deepanika Gupta <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Mukund} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Mukund <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Nikhil} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Nikhil Vasudevan <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Nisha} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Nisha <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Prakriti} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Prakriti Rani <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Srishty} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Srishty <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Vamika} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Vamika <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
