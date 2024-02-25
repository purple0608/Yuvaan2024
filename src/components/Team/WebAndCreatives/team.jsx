import React from "react";

// import Background_img from "../../../assets/teams/TeamBG.jpeg"
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div>
      <div
        className="tm-main"
      >
        <div className="et-box">
          <h1
            className="et-title"
            style={{ color: "white", textAlign: "center" }}
          >
            Web And Creatives
          </h1>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Aman.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Aman Yadav<br />
                <span>Team Head</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Nandini.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Nandini Thakur<br />
                <span>Team Head</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Anant.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Anant Sharma<br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Pallav%20kumar.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Pallav Kumar <br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Piyush%20Upadhyay.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Piyush Upadhyay <br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Ronit%20Chinda.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Ronit Chinda <br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Saksham%20Jain.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Saksham Jain <br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>

          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Shreya%20Malik.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Shreya Malik <br />
                <span>Team Meember</span>
              </h2>
            </div>
          </div>
          <div className="et-card">
            <div className="et-imgBox">
              <img src="https://d1y50e2lm5xcwm.cloudfront.net/Team/web_cre/Vasu%20Pandey.jpg" alt="some image" />
            </div>
            <div className="et-details">
              <h2>
                Vasu Pandey <br />
                <span>Team Member</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
