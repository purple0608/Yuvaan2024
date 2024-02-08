import React from "react";
import Sindhu from "../../../assets/teams/EM/Sindhu Rallabandi.jpg";
import Shre from "../../../assets/teams/EM/Shreya Gupta.jpg";
import Abhay from "../../../assets/teams/EM/Abhay Chaudhary.jpg";
import Kartik from "../../../assets/teams/EM/Kartik Saini.jpg";
import Manya from "../../../assets/teams/EM/Manya Maheshwari.jpg";
import Naman from "../../../assets/teams/EM/Naman Jain.jpg";
import Prajita from "../../../assets/teams/EM/Prajita Barai.jpg";
import Ritik from "../../../assets/teams/EM/Ritik Kumar Singh.jpg";
import Sai from "../../../assets/teams/EM/Sai Yashwant.jpg";
import Shruti from "../../../assets/teams/EM/Shruthi Mohan.jpg";
import Smriti from "../../../assets/teams/EM/Smriti Tiwari.jpg";
import Sudipto from "../../../assets/teams/EM/Sudipto.jpg";
import Vishakha from "../../../assets/teams/EM/Vishakha.jpg";
import "../team.css"; // Make sure to import or include your CSS file
import { Man } from "@mui/icons-material";

const Team = () => {
  return (
    <div>
      <div className="et-box">
        <h1 className="title" style={{ color: "white", textAlign: "center" }}>
          Event Management
        </h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Shre} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Shreya Gupta <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Sindhu} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Sindhu Rallabandi <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Abhay} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Abhay Chaudhary <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Kartik} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Kartik Saini <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Manya} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Manya Maheshshwari <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Naman} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Naman Jain <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Prajita} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Prajita Barai <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Ritik} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Ritik Kumar Singh <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Sai} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Sai Yashwant <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Shruti} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Shruthi Mohan <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Smriti} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Smriti Tiwari <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Sudipto} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Sudipto <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img src={Vishakha} alt="some image" />
          </div>
          <div className="et-details">
            <h2>
              Vishakha <br />
              <span>Team Mmeber</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
